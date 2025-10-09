import React, { useEffect, useRef,useState } from 'react'
import verifyZu from '../../../lib/verifyZu';
import { toast } from 'react-toastify';
import { Loader } from '../../../lib/loader';
export default function VerifyEl() {
    const {email,username,setVTab,setMail} = verifyZu();
    const {isTrue,toggleLoader} = Loader();
    const [isLoader,setLoader] = useState(isTrue);
    let btnRef = useRef();
    let vbtnRef = useRef();

    useEffect(()=>{
      setLoader(isTrue)
    },[isTrue])
    const handleAPICall = async () => {
     // if (btnRef.current.disabled != true) {
        toggleLoader();
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
                toast.error(result.err)
                setVTab(false);
            }
        } catch (error) {
            console.log(error.message)
        } finally{
          toggleLoader();
        }
      //}
    }
    function setCoundown() {
        let coundown = 120;
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
        vbtnRef.current.disabled = true
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
    if (newOtp.every(digit => digit !== "")) {
      vbtnRef.current.disabled = false;
       //handleSubmit(); // no need to pass anything
    }
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


  const handleAnimation =  () => {
    let startingDelay = 0;
    let inputCon = document.querySelector('.otp-container').children;
    Array.from(inputCon).forEach(inp => {
      startingDelay = startingDelay+0.4+"s";
        inp.transition = ".7s"
        inp.style.transitionDelay = startingDelay;
    });
    Array.from(inputCon).forEach(inp=>{
      inp.style.borderColor = "yellowgreen";
      inp.blur();
    })
    setVTab(false)
  }
  const handleSubmit = async (evnt) => {
    if (evnt) {
      evnt.preventDefault();
    }
    toggleLoader();
    vbtnRef.current.disabled = true;
    let inOTP = otp.join("");
   try {
        console.log(inOTP,email,username)
        let rqst = await fetch("/myServer/verifyEmail",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({username,email,inOTP})
        })
        let result = await rqst.json();
        if (result.err) {
          toast.info(result.err)
        }else{
          toast.success(result.pass)
          handleAnimation();
        }
   } catch (error) {
      toast.error(error.message.err)
   } finally {
    toggleLoader();
    vbtnRef.current.disabled = false;
   }
  }
    return(
        <div className="underTaker">
            <div className="verifyDiv flex items-center justify-center">
                <div className="formDiv">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="txtDiv flex items-center flex-col p-2 gap-2">
                            <img className='h-[100px]' src="./Logo/CodeCove_Logo.png" alt="" />
                            <p className='font-light'>We sent a verification Code on.</p>
                            <span className='text-[12px]'>{email}</span>
                            <button className='text-btn' onClick={()=>{setMail(""),setVTab(false)}} type='button'>Change</button>
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
                                 type="text" maxLength={1} className='otp-box h-8 w-8 text-center text-[12px] font-medium  border-2 rounded-lg' />
                            ))
                           }
                        </div>
                        <div className="inputDiv">
                            <button ref={btnRef} onClick={() => {
                                  handleAPICall();
                                  setCoundown();
                                }}
                                 type='button' className='text-btn'>Resend (120s)</button>
                            <button ref={vbtnRef} type='submit' className='btn'>{isLoader ? <div className="miniLoader"></div> :"Verify"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}