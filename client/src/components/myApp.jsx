import PageTransition from '../assets/animations/framerMotion'
import {Routes,Route, useLocation} from 'react-router-dom';
import LoginEL from '../Page/Login/baseFIle';
import Header from '../Page/BaseComponent/header';
import MenuEL from '../Page/BaseComponent/menu';
import { useEffect, useState } from 'react';
import { Loader } from '../lib/loader';
import LoaderEL from '../assets/animations/loadingBar';
import { useThemeStore } from '../lib/toggleTheme';
export default function MyApp() {
    let {toggleTheme} = useThemeStore();
    let [currentTheme] = useState(localStorage.getItem('theme') || "light")
    let location = useLocation();
    let isLogin = location.pathname === "/"
    const {isTrue,toggleLoader} = Loader();
    useEffect(()=>{
        const handler = ()=> toggleLoader();
        window.addEventListener("load",handler);
        return ()=> window.removeEventListener("load",handler)
    },[location.pathname]);

    useEffect(()=>{
        toggleTheme(currentTheme)
    },[])
    return(
        <PageTransition location={location} key={location.pathname}>
            {isTrue && <LoaderEL/>}
           {!isLogin && <Header/>}
           {!isLogin && <MenuEL/>}
            <Routes>
                <Route path='/' element={<div className='loginContainer flex items-center content-center h-[100vh] w-[100vw]'>{<LoginEL/>}</div>} />
                <Route path='/Home' element={<div className='routeContainer flex items-center content-center'>{<LoginEL/>}</div>} />
            </Routes>
        </PageTransition>
    )
}