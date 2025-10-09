import FaceToggle from "../../lib/tabToggle";
export default function LoginCon({toggle}) {
    const {setTab} = FaceToggle();

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
    return(
        <div className="underTaker">
            <div className="mainLogDiv flex items-center justify-center h-full w-full ">
                <div className="formDiv">
                    <form action="">
                         <div className="Logotxt flex items-center flex-col w-[120px] absolute sm:top-[-80px] lg:top-[-90px]">
                            <i className='bx bx-code-block text-5xl
                            transition-all duration-500 ease-in-out bg-[length:200%_200%]
                            bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                            bg-clip-text text-transparent
                            '></i>
                            <h2 className=' font-bold text-2xl transition-all duration-500 ease-in-out bg-[length:200%_200%]
                            bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                            bg-clip-text text-transparent'>CodeCove</h2>
                        </div>
                            <div className="inputDiv">
                                <input onBlur={(evnt)=>handleBlur(evnt.target)} type="text" name="Email" id="Email"/>
                                <label htmlFor="Email"><i className="bx bx-user">Username</i></label>
                            </div>
                            <div className="inputDiv">
                                <input onBlur={(evnt)=>handleBlur(evnt.target)} type="Password" name="Password" id="Paswrd"/>
                                <label htmlFor="Paswrd"><i className="bx bx-key">Password</i></label>
                            </div>
                            <div className="inputDiv twobtnInput">
                                <button className="text-btn bigBtn" type="button" onClick={()=>setTab("right")}>Forgot Password?</button>
                                <button className="btn bigBtn">Login</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}