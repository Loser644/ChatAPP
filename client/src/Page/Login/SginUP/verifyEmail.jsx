import React, { useEffect, useRef,useState } from 'react'
export default function VerifyEl({email}) {

    let btnRef = useRef();
    function setCoundown() {
        let coundown = 60;

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
  };

  const handleKeyDown = (e, index) => {
    console.log(e,index)
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

    return(
        <div className="underTaker">
            <div className="verifyDiv flex items-center justify-center">
                <div className="formDiv">
                    <form action="">
                        <div className="txtDiv flex items-center flex-col p-2 gap-1">
                            <img className='h-[100px]' src="./Logo/CodeCove_Logo.png" alt="" />
                            <p className='font-light'>We sent a verification Code on.</p>
                            <span className='text-[12px]'>xxxxxxx644@gmail.com</span>
                        </div>
                        <div className="otp-container flex justify-center gap-2 m-[2rem 0]">
                           {
                            otp.map((value,index)=>(
                                 <input 
                                    key={index}
                                    value={value}
                                    onChange={(e)=>handleChange(e,index)}
                                    onKeyDown={(e)=>handleKeyDown(e,index)}
                                    ref={(el)=>(inputsRef.current[index] = el)}
                                 type="text" maxLength={1} className='otp-box h-7 w-7 text-center text-[12px] font-medium border rounded-lg' />
                            ))
                           }
                        </div>
                        <div className="inputDiv">
                            <button ref={btnRef} onClick={setCoundown} type='button' className='text-btn'>Resend (60s)</button>
                            <button type='submit' className='btn'>Verify</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}