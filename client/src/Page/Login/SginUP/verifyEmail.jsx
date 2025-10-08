import React, { useEffect, useRef,useState } from 'react'
import verifyZu from '../../../lib/verifyZu';
import { toast } from 'react-toastify';
export default function VerifyEl() {
    const {email,username} = verifyZu();
    let btnRef = useRef();
    const handleAPICall = async () => {
     // if (btnRef.current.disabled != true) {
        try {
            let request = await fetch("/myServer/sendVerifyEmail",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,email})
            })
            let result = await request.json();
            if (result.pass) {
                toast.success("We Succesfully! send the OTP again")
            }else{
              toast.error("Something went wrong please refres")
            }
        } catch (error) {
            console.log(error.message)
        }
      //}
    }
    function setCoundown() {
        let coundown = 5;
        let btn= btnRef.current;
        btn.disabled = true;
        btn.style.opacity = 0.7;
        btn.textContent = `${coundown}`
        const intervel = setInterval(()=>{
            coundown--;
            btn.textContent = ` Resend in ${coundown}`

            if (coundown <= 0) {
                clearInterval(intervel);
                btn.disabled = false;
                btn.style.opacity = 1;
                btn.textContent = "Resend"
            }
        },1000)
}
    useEffect(()=>{
        setCoundown();
    },[])

 const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move focus to next input
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // notify parent
    newOtp.join("")
    // if (newOtp.every(digit => digit !== "")) {
    // handleSubmit(); // no need to pass anything
    // }
  };

  const handleKeyDown = (e, index) => {
    if (e.key ==='Backspace') {
         const newOtp = [...otp];
      if (newOtp[index] === "" && index > 0) {
        inputsRef.current[index - 1].focus();
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };
  const handleSubmit = async (evnt) => {
    if (evnt) {
      evnt.preventDefault();
    }
    let inOTP = otp.join("");
    console.log(inOTP,email,username)
    let rqst = await fetch("/myServer/verifyEmail",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({username,email,inOTP})
    })
    let result = await rqst.json();
   console.log(result)
  }
    return(
        <div className="underTaker">
            <div className="verifyDiv flex items-center justify-center">
                <div className="formDiv">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="txtDiv flex items-center flex-col p-2 gap-3">
                            <img className='h-[100px]' src="./Logo/CodeCove_Logo.png" alt="" />
                            <p className='font-light'>We sent a verification Code on.</p>
                            <span className='text-[12px]'>{email}</span>
                        </div>
                        <div className="otp-container flex justify-center gap-2 m-[2rem 0]">
                           {
                            otp.map((value,index)=>(
                                 <input 
                                    key={index}
                                    value={value}
                                    id={index}
                                    onChange={(e)=>handleChange(e,index)}
                                    onKeyDown={(e)=>handleKeyDown(e,index)}
                                    ref={(el)=>(inputsRef.current[index] = el)}
                                 type="text" maxLength={1} className='otp-box h-8 w-8 text-center text-[12px] font-medium border rounded-lg' />
                            ))
                           }
                        </div>
                        <div className="inputDiv">
                            <button ref={btnRef} onClick={() => {
                                  handleAPICall();
                                  setCoundown();
                                }}
                                 type='button' className='text-btn'>Resend (60s)</button>
                            <button type='submit' className='btn'>Verify</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}