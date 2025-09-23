import ThemeButton from "../../components/toggleButton";
import React, { useState } from 'react'
export default function Header() {
    const [isToggle,setToggle] = useState(false)
    return(
        <div className="headerContainer cursor-pointer lg:!bg-gray-500 lg:h-10 lg:w-[200px] lg:rounded-[2rem] lg:absolute lg:!top-160 lg:!right-30 h-15 w-full  rounded flex items-center justify-between
        lg:bg-gradient-to-tr lg:from-yellow-400 lg:via-purple-600 lg:to-pink-500
        bg-[length:200%_200%] hover:bg-[position:200%_0%] lg:!text-white lg:hover:!text-skin-text transition-all duration-500 ease-in-out !text-skin-text border-b border-gray-500">
            <div className="firstHalf lg:hidden w-1/2 flex items-center ">
                    <i className="bx bx-code-block text-3xl bg-[length:200%_200%]
                bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                bg-clip-text text-transparent"></i><p className="text-2xl bg-[length:200%_200%]
                bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                bg-clip-text text-transparent font-bold">CodeCove</p>
            </div>
            {/* <ThemeButton/> */}
            <div className="scondHalf  lg:w-full w-1/3 flex items-center justify-around text-2xl">
                <i className="bx bxl-github lg:!hidden" ></i>
                <i className="bx bx-cog lg:!hidden"></i>
                <i className='bx bx-message-rounded-detail'><span className="lg:inline hidden">Message</span></i>
            </div>
            <div className="userMenu relative flex items-center lg:hidden !text-skin-text">
                <div onClick={()=>setToggle(prev=>!prev)} className="imgDiv h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center border-2 border-amber-200">
                    <img className="h-[30px] w-[30px] rounded-full" src="https://i.postimg.cc/7ZTJzX5X/icon.png" alt="" />
                </div>
                {
                   isToggle && <div className="dropDown absolute px-3 border border-white-20 shadow-lg rounded-2xl
                   z-50 backdrop-blur-md bg-skin-bg/50 
                   ">
                    <ul>
                        <li><i className="bx bx-user-circle !text-skin-text"></i> Profile</li>
                        <li><ThemeButton/></li>
                        <li><i className="bx bx-cog !text-skin-text"></i> Setting</li>
                        <li><i className="bx bx-log-out !text-skin-text"></i> Logout</li>
                    </ul>
                </div>
                }
            </div>
        </div>
    )
}