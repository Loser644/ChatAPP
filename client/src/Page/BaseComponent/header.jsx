import ThemeButton from "../../components/toggleButton";

export default function Header() {
    
    return(
        <div className="headerContainer cursor-pointer lg:!bg-gray-500 lg:h-10 lg:w-[200px] lg:rounded-[2rem] lg:absolute lg:!top-160 lg:!right-30 h-15 w-full  rounded flex items-center justify-between
        lg:bg-gradient-to-tr lg:from-yellow-400 lg:via-purple-600 lg:to-pink-500
         lg:hover:bg-gradient-to-tr lg:hover:from-pink-500 lg:hover:via-purple-500 lg:hover:to-yellow-500 lg:!text-white lg:hover:!text-yellow transition-colors duration-500 ease-in-out">
            <div className="firstHalf lg:hidden w-1/2 flex items-center ">
                    <i className="bx bx-code-block text-3xl"></i><p className="text-2xl !text-skin-ptext">CodeCove</p>
            </div>
            {/* <ThemeButton/> */}
            <div className="scondHalf  lg:w-full w-1/2 flex items-center justify-around text-2xl">
                <i className="bx bxl-github lg:!hidden" ></i>
                <i className="bx bx-cog lg:!hidden"></i>
                <i className='bx bx-message-rounded-detail'><span className="hidden lg:visible">Message</span></i>
            </div>
        </div>
    )
}