import ThemeButton from "../../components/toggleButton";
import React, { useState } from 'react'
export default function Header() {
    const [isToggle,setToggle] = useState(false)
    return(
        <div className="headerContainer cursor-pointer lg:!bg-gray-500 lg:h-10 lg:w-[200px] lg:rounded-[2rem] lg:absolute lg:!top-160 lg:!right-30 h-15 w-full  rounded flex items-center justify-between
        lg:bg-gradient-to-tr lg:from-yellow-400 lg:via-purple-600 lg:to-pink-500
         lg:hover:bg-gradient-to-tr lg:hover:from-pink-500 lg:hover:via-purple-500 lg:hover:to-yellow-500 lg:!text-white lg:hover:!text-yellow transition-colors duration-500 ease-in-out !text-skin-text border-b border-gray-500">
            <div className="firstHalf lg:hidden w-1/3 flex items-center ">
                    <i className="bx bx-code-block text-3xl"></i><p className="text-2xl ">CodeCove</p>
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
                   isToggle && <div className="dropDown absolute px-3 py-4 bg-gray-400 border-amber-100 rounded-2xl">
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