import { useEffect, useRef, useState } from "react";
import FaceToggle from "../../../lib/tabToggle";
import {toast} from 'react-toastify'
import verifyZu from "../../../lib/verifyZu";
import { Loader } from "../../../lib/loader";
export default function UserNameEl({stoggle}) {
    const {setTab} = FaceToggle();
    const {setMail,setTUsername,setVTab} = verifyZu();
    const {isTrue,toggleLoader} = Loader();
    const [username,setUsername] = useState("");
    // const [debounceVal,setDeVal] = useState("");
    const [takenList,setList] = useState([]);
    const [cache,setCache] = useState([]);
    const [isLoader,setLoader] = useState(isTrue);
    let divRef = useRef();
    let timeoutId; // define outside function (component scope or useRef)
    useEffect(()=>{
        setLoader(isTrue)
    },[isTrue])
    function checkAv() {
    // remove previous classes before adding a new one
    toggleLoader();
    divRef.current.classList.remove('avlbl', 'notavlbl');

    if (takenList.length > 0) {
        if (takenList.includes(username)) {
        divRef.current.classList.add('notavlbl');
        } else {
        divRef.current.classList.add('avlbl');
        setCache([])
        }
    } else {
        divRef.current.classList.add('avlbl');
    }
    toggleLoader()
    // clear any previous timeout to avoid overlapping removals
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        divRef.current.classList.remove('avlbl', 'notavlbl');
    }, 3000);


    }

    useEffect(()=>{
        const handler = setTimeout( () => {
            if (username.length>=4) {
                // setDeVal(username);
                checkUsername()
            }
        }, 500);
        return ()=> clearTimeout(handler);
    },[username]);
    const checkUsername = async () => {
        if(cache.length>0){
            checkAv();
        }else{
            try {
                let request = await fetch(`/myServer/getUsername?username=${username}`)
                let result = await request.json();
                if (result.avalable === true) {
                    checkAv();
                } else {
                    setCache(result.suggestion);
                    setList(result.takenList);
                    checkAv();
                }
                console.log(cache)
            } catch (error) {
                console.log(error.message)
            }
        }
    }
    const handleBlur = (inp)=>{
        if (inp && inp.value) {
            let labl = inp.nextElementSibling;
            labl.classList.add('activeLabl');
        } else if(inp && !inp.value) {
            let lbl = inp.nextElementSibling;
            lbl.classList.remove('activeLabl');
        }else{
            let divs = document.querySelectorAll('.inputDiv');
            divs.forEach(inpDiv=>{
                let input = inpDiv.querySelector('input');
                let lbal = inpDiv.querySelector('label');
                if (input && !input.value) {
                    lbal.classList.remove('activeLabl');
                } else if(input && input.value){
                    lbal.classList.add('activeLabl')
                }
            })
        }
    }

    const handleSubmit = async (evnt) => {
        evnt.preventDefault();
        toggleLoader()
        let formData = new FormData(evnt.target);
        let {username, email} = Object.fromEntries(formData);
        if (cache.includes(username)) {
            return toast.info(username+" is Already Taken");
        }
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
                setMail(email)
                setTUsername(username)
                toast.success("We sucsfuLy send the otp ")
                setVTab(true)
            }
        } catch (error) {
            console.log(error.message);
        } finally{
            toggleLoader();
        }
    }
    return(
        <div className="underTaker">
            <div className="nameComDiv flex items-center justify-center">
                <div className="formDiv">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="Logotxt flex items-center flex-col w-[120px] absolute top-[-100px]">
                            <i className='bx bx-code-block text-5xl
                            transition-all duration-500 ease-in-out bg-[length:200%_200%]
                            bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                            bg-clip-text text-transparent
                            '></i>
                            <h2 className=' font-bold text-2xl transition-all duration-500 ease-in-out bg-[length:200%_200%]
                            bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                            bg-clip-text text-transparent'>CodeCove</h2>
                        </div>
                        {/* <h1 className="flex items-center justify-center text-red-600 font-bold">Stay 
                            <span>
                                <span>Safe, Stay Anonymous</span>
                                <span>Curious, Keep Building</span>
                                <span>Connected, Without Labels</span>
                                <span>Ahead, Follow the Revolution</span>
                                <span>Hidden, Yet Heard</span>
                            </span>
                            </h1> */}
                            <div ref={divRef} className="inputDiv">
                                <input type="text"
                                onBlur={(evnt)=>handleBlur(evnt.target)}
                                    onChange={(evnt)=>setUsername(evnt.target.value)}
                                id="UserName" autoComplete="username" name="username" value={username} required/>
                                <label htmlFor="UserName"><i className="bx bx-user">Username</i></label>
                                <i id="checkbox" className="bx bxs-check-circle absolute right-0 top-2 transition-all duration-700 "></i>
                             <div className="suggestionDiv absolute flex items-center justify-center bottom-[-14px] gap-1.5">
                                {cache?.map((value,index)=>(
                                    <p onClick={()=>{setUsername(value),setCache([])}} className=" rounded-2xl text-[11px] " key={index}>{value}</p>
                                ))}
                            </div>
                            </div>
                            
                        <div className="inputDiv">
                            <input type="text" onBlur={(evnt)=>handleBlur(evnt.target)} id="email" name="email" required />
                            <label htmlFor="email"><i className="bx bx-id-card">Email</i></label>
                        </div>
                        <div className="inputDiv">
                            <button type="button" className="text-btn" onClick={()=>setTab("front")} >Already have Account?</button>
                            <button type="submit" className="btn">{isLoader ? <div className="miniLoader"></div> :"Login"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}