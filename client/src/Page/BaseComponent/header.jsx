export default function Header() {
    
    return(
        <div className="headerContainer cursor-pointer lg:!bg-gray-500 lg:h-10 lg:w-[200px] lg:rounded-[2rem] lg:absolute lg:!top-160 lg:!right-30 h-15 w-full  rounded flex items-center justify-between
        lg:bg-gradient-to-tr lg:from-yellow-400 lg:via-purple-600 lg:to-pink-500
         lg:hover:bg-gradient-to-tr lg:hover:from-pink-500 lg:hover:via-purple-500 lg:hover:to-yellow-500 lg:hover:!text-white transition-colors duration-500 ease-in-out">
            <div className="firstHalf lg:hidden w-1/2 flex items-center gap-2.5">
                    <i className='bx bx-palette  text-3xl text-skin-text'></i>
                <div className="logo">
                    <img className="h-10 outline-0 " src="./Logo/CodeCove_Name.png" alt="" />
                </div>
            </div>
            <div className="scondHalf  lg:w-full w-1/3 flex items-center justify-around">
                <i className="bx bxl-github lg:!hidden" ></i>
                <i className="bx bx-font-color lg:!hidden"></i>
                <i className='bx bx-message-rounded-detail'><span>Message</span></i>
            </div>
        </div>
    )
}