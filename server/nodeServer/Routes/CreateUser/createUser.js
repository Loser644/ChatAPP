import {connection} from '../../Controllers/myConnectionFile.js';
import bcrypt from 'bcrypt';
import fs from 'fs';
import {sendTheMail} from '../../Controllers/nodemailer.js';
async function checkDublicate(sqlData,username,email) {
    //console.log(email,username,sqlData)
    if (sqlData.some(prv=> prv.username === username)) {
        return username;
    }else if (sqlData.some(prv=> prv.email === email)) {
        return email;
    }
}

async function deleImg(avatar) {
    try {
        await fs.promises.unlink("./"+avatar);
        return {status:true}
    } catch (error) {
        return {status:false,err:error.message};
    }
}
export const CreateUser = async (rkv,rspo) => {
    let {email,password,username} = rkv.body;
    if (!rkv.file) {
        return rspo.send({err:"Please set your dp"})
    }
    let avatar = "Images/Avtar/"+rkv.file.filename;
    if( !password || !username || !email || !password.trim() || !username.trim() || !email.trim()) {
        let rslt = await deleImg(avatar);
        if (!rslt.status) return rspo.status(501).send({err:rslt.err})
        return rspo.status(400).send({err:"Please provide peroper information"});
    }

    if(!/^[A-Z][a-z]+(?: [A-Z][a-z]+)*/.test(name)) {
        let rslt = await deleImg(avatar);
        if (!rslt.status) return rspo.status(501).send({err:rslt.err})
        return rspo.status(400).send({err:"Enter a valid Name"});}
    
    if (
        //!email.endsWith("@gmail.com") ||
       !/^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
        let rslt = await deleImg(avatar);
        if (!rslt.status) return rspo.status(501).send({err:rslt.err})
        return rspo.status(400).send({err:"Please Enter a valid Email"})
    }

    let [isDublicate] = await connection.query("SELECT username,email FROM USERS WHERE username=? OR email=?",[username,email]);

    if (isDublicate.length>0) {
        let dublicate = await checkDublicate(isDublicate,username,email);
        let rslt = await deleImg(avatar);
        if (!rslt.status) return rspo.status(501).send({err:rslt.err})
        return rspo.status(302).send({err:`${dublicate} Already Taken`});
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password)) {
        let rslt = await deleImg(avatar);
        if (!rslt.status) return rspo.status(501).send({err:rslt.err})
        return rspo.status(400).send({err:"password length atlist 6"})
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    try {
        let send = await sendTheMail(
            email,
            "Welcome to CodeCove🎉",
            "wellcome",
            {username,otp}
        )
        // rspo.send({send});
        let hashPass = await bcrypt.hash(password,10);
        let createquery="INSERT INTO users (name,username,email,password,avatar) VALUES (?,?,?,?,?)";
        let request = await connection.query(createquery,[username,email,hashPass,avatar])
        rspo.status(201).send({send,pass:"Created",request})
    } catch (error) {
        let rslt = await deleImg(avatar);
        if (!rslt.status) return rspo.status(501).send({err:rslt.err})
        rspo.status(500).send({err:"something went wrong",details:error.message});
    }
    
}