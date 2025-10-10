import { useState } from "react"

export default function CpassEL() {
    const [img,setimg] = useState({
        fileUrl:"",
        mainfile:File
    })
    return(
        <div className="underTaker">
            <div className="picPass flex items-center justify-center">
                <div className="formDiv">
                    <form action="">
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
                        <div className="inputDiv !flex-col !h-[100px] border-2 border-amber-400 !items-center">
                            <input type="file" style={{display:"none"}} id="file" name="file" />
                            <img src={img?.url || "https://i.postimg.cc/zDK9mWZX/girl-anime.avif"} className="h-10 w-10 rounded-full" alt="DP" />
                            <label htmlFor="file"><i className="bx bx-image"></i>Profile Picture</label>
                        </div>
                        <div className="inputDiv">
                            <input type="password" name="password" id="password" />
                            <label htmlFor="password"><i className="bx bx-key">Password</i></label>
                        </div>
                        <div className="inputDiv">
                            <button className="text-btn">Back</button>
                            <button className="btn">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}