import { useState } from "react"

export default function LoginEL() {
    let [face,setFace] = useState("front");

    let getRotation = ()=>{
        switch (face) {
      case "front": return "rotate-y-0";
      case "right": return "-rotate-y-90";
      case "back": return "-rotate-y-180";
      case "left": return "rotate-y-90";
      default: return "rotate-y-0";
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
                            <p>Connect with people..........</p>
                            <p>Stay Anonymous...............</p>
                            <p>Share & Gain Knowlage........</p>
                            <p>And much more with CodeCove..</p>
                            <p>Connect with people..........</p>
                        </div>
                    </div>
                    <div className="rightside h-full flex-1 !p-5 flex justify-center items-center">
                        <div className="container !p-4 h-3/4 w-2/3  flex items-center justify-center">
                            <div className="senceDiv h-full w-full perspective-distant flex items-center justify-center">
                                <div className={`cube relative transform-3d transition-all duration-1000 flex items-center justify-center ${getRotation()}`}>
                                    <div className="face front">Login</div>
                                    <div className="face right">Sgin up</div>
                                    <div className="face back">Forgot</div>
                                    <div className="face left">Verify</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}