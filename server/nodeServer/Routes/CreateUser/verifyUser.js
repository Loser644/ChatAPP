import {database} from '../../Controllers/myConnectionFile.js';
import jwt from 'jsonwebtoken';
import {sendTheMail} from '../../Controllers/nodemailer.js'
import dotenv from 'dotenv';
dotenv.config();
export const SendEmailVerify = async (rkv,rspo) => {
    let {username,email} = rkv.body;
    try {
        let [row] = await database.query("SELECT username, email FROM users WHERE username=? OR email=?",[username,email])
        console.log(row)
        if(row.some(crntRow=>crntRow.username === username)) return rspo.status(406).send({err:`${username} is Already taken`});
        if (row.some(crntRow=>crntRow.email === email)) return rspo.status(406).send({err:`Account Exists on ${email}`});
        if (
        //!email.endsWith("@gmail.com") ||
       !/^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
         ) {
        return rspo.status(400).send({err:"Please Enter a valid Email"})
        }

        const otp = Math.floor(100000 + Math.random() * 900000);
        let send = await sendTheMail(
            email,
            "Welcome To CodeCove🎉",
            "Wellcome",
            {username,otp}
        )
        let payload = {email,otp}
        if (send.rejected.length===0) {
            const token = jwt.sign(payload,process.env.jwt_sec,{expiresIn:"5m"});
            rspo.cookie("otpToken", token, {
              httpOnly: true,
              secure: false, // must be false on localhost
              sameSite: "strict",
              maxAge: 5 * 60 * 1000,
            });
            rspo.status(200).send({pass:"Email Send"});
        } else {
            rspo.status(504).send({err:"Something went wrong while sending the OTP"})
        }
    
    } catch (error) {
        rspo.status(500).send({err:"server side error",details:error.message});
    }
    
}

export const verifyEmail = async (rkv,rspo) => {
    let {username,email,otp} = rkv.body;
   try {
    let token = rspo.cookies.otpToken
    console.log(token)

    let decoded = jwt.decode(token,process.env.jwt_sec)
    console.log(decoded,token,process.env.jwt_sec)
    rspo.end();
   } catch (error) {
    rspo.status(500).send({err:"server side error",details:error.message})
   }
}