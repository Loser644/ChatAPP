import React, { useState } from 'react'
export default function MenuEL(params) {
    const [currentTab,setTab] = useState('Home');
    return(
        <div className="menuDiv border-r-1 h-[91vh] border-gray-400 lg:h-[100vh] lg:w-[200px]
        flex items-center flex-col gap-5
        ">
            <div className="Logotxt flex items-center flex-col w-[120px]">
                <i className='bx bx-code-block text-5xl
                transition-all duration-500 ease-in-out bg-[length:200%_200%]
                bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                bg-clip-text text-transparent
                '></i>
                <h2 className=' font-bold text-2xl transition-all duration-500 ease-in-out bg-[length:200%_200%]
                bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                bg-clip-text text-transparent'>CodeCove</h2>
            </div>
            <div className='menuContainer flex items-center flex-col gap-10 lg:text-[20px] md:text-3xl text-skin-text'>
                <ul className='flex items-start flex-col gap-5  border-b-2 border-gray-400'>
                <li onClick={()=>setTab('Home')}><i className={`bx ${currentTab==='Home'?"bxs":"bx"}-home text-skin-text`}></i><span>Home</span></li>
                <li onClick={()=>setTab('Search')}><i className={`bx ${currentTab==='Search'?"bxs":"bx"}-search text-skin-text`}></i><span>Search</span></li>
                <li onClick={()=>setTab('Chat')}><i className={`bx ${currentTab==='Chat'?"bxs":"bx"}-chat text-skin-text`}></i><span>Messages</span></li>
                <li onClick={()=>setTab('Explore')}><i className={`bx ${currentTab==='Explore'?"bxs":"bx"}-compass text-skin-text`}></i><span>Explore</span></li>
                <li onClick={()=>setTab('Noti')}><i className={`bx ${currentTab==='Noti'?"bxs":"bx"}-bell text-skin-text`}></i><span>Notifications</span></li>
                <li onClick={()=>setTab('Profile')}> <div className='imgDiv h-[20px] w-[20px] md:h-[30px] md:w-[30px] border rounded-full flex items-center justify-center'><img className='h-[20px] w-[20px] rounded-full' src="https://i.postimg.cc/7ZTJzX5X/icon.png" alt="" /></div> <span>Profile</span></li>
                </ul>
                <ul className='flex items-start flex-col gap-5'>
                    <li onClick={()=>setTab("none")}><i className='bx bx-cog'></i><span>Setting</span></li>
                    <li onClick={()=>setTab("none")}><i className='bx bx-menu-alt-left'></i><span>DevTools</span></li>
                </ul>
            </div>
        </div>
    )
}