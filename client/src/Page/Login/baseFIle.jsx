import { useEffect, useState } from "react"
import SginUp from "./SginUP/sginUp";
import FaceToggle from "../../lib/tabToggle";
export default function LoginEL() {
    const {currentTab,setTab} = FaceToggle();
    let [face,setFace] = useState(currentTab);

    useEffect(()=>{
        setFace(currentTab)
    },[currentTab])
    let getRotation = ()=>{
          switch (face) {
            case "front": return "show-front rotate-y-0";
            case "right": return "show-right -rotate-y-90";
            case "back": return "show-back -rotate-y-180";
            case "left": return "show-left rotate-y-90";
            default: return "show-front rotate-y-0";
         }
    }
    return(
        <div className="underTaker">
            <div className="login my-scroll h-full w-full flex flex-col items-center text-skin-text">
                <div className="loginbase p-4 h-[100vh] w-full flex items-center flex-row">
                    <div className="leftside h-full flex-1 flex items-center flex-col
                    ">
                        <img src="./Banner/banner.png" alt="bannerImage" className="z-0 absolute top-3 h-2/3" />
                        <div className="text-div flex items-start flex-col relative top-2/3 
                        text-2xl font-bold
                        ">
                            <p>Stay Safe, Stay Anonymous</p>
                            <p>Stay Curious, Keep Building</p>
                            <p>Stay Connected, Without Labels</p>
                            <p>Stay Inspired, Share Your Code</p>
                            <p>Stay Ahead, Follow the Revolution</p>
                            <p>Stay Bold, Break the Silence</p>
                            <p>Stay Sharp, Learn Everyday</p>
                            <p>Stay True, No Filters</p>
                            <p>Stay Free, Express Without Fear</p>
                            <p>Stay Hidden, Yet Heard</p>
                                
                        </div>
                    </div>
                    <div className="rightside h-full flex-1 !p-5 flex justify-center items-center">
                        <div className="container !p-4 h-3/4 w-2/3  flex items-center justify-center">
                            <div className="senceDiv h-full w-full perspective-distant flex items-center justify-center">
                                <div className={`cube relative transform-3d transition-all duration-1000 flex items-center justify-center ${getRotation()}`}>
                                    <div className="face front">Login</div>
                                    <div className="face right"><SginUp toggle={setFace}/></div>
                                    <div className="face back">Forgot</div>
                                    <div className="face left">Verify</div>
                                </div>
                                <button onClick={()=>setTab("right")}>Sgin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}