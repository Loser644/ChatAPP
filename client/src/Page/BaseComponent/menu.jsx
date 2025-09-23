import React, { useState } from 'react'
export default function MenuEL(params) {
    const [currentTab,setTab] = useState('Home');
    return(
        <div className="menuDiv">
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
            <div className='menuContainer'>
                <ul>
                <li onClick={()=>setTab('Home')}><i className={`bx ${currentTab==='Home'?"bxs":"bx"}-home`}></i><span>Home</span></li>
                <li onClick={()=>setTab('Search')}><i className={`bx ${currentTab==='Search'?"bxs":"bx"}-search`}></i><span>Search</span></li>
                <li onClick={()=>setTab('Noti')}><i className={`bx ${currentTab==='Noti'?"bxs":"bx"}-bell`}></i><span>Notifications</span></li>
                <li onClick={()=>setTab('Explore')}><i className={`bx ${currentTab==='Explore'?"bxs":"bx"}-compass`}></i><span>Explore</span></li>
                <li onClick={()=>setTab('Chat')}><i className={`bx ${currentTab==='Chat'?"bxs":"bx"}-chat`}></i><span>Messages</span></li>
                <li onClick={()=>setTab('Profile')}><span>Profile</span></li>
                </ul>
                <ul>
                    <li onClick={()=>setTab("none")}><i className='bx bx-cog'></i><span></span></li>
                    <li onClick={()=>setTab("none")}><i className='bx bx-menu-alt-left'></i></li>
                </ul>
            </div>
        </div>
    )
}