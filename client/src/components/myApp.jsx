import PageTransition from '../assets/animations/framerMotion'
import {Routes,Route, useLocation} from 'react-router-dom';
import LoginEL from '../Page/Login/baseFIle';
import Header from '../Page/BaseComponent/header';
import MenuEL from '../Page/BaseComponent/menu';
import { useEffect } from 'react';
import { Loader } from '../lib/loader';
import LoaderEL from '../assets/animations/loadingBar';
export default function MyApp() {
    let location = useLocation();
    const {isTrue,toggleLoader} = Loader();
    useEffect(()=>{
        const handler = ()=> toggleLoader();
        window.addEventListener("load",handler);
        return ()=> window.removeEventListener("load",handler)
    },[])
    return(
        <PageTransition location={location} key={location.pathname}>
            <LoaderEL/>
           <Header/>
           <MenuEL/>
            <Routes>
                <Route path='/' element={<div className='routeContainer flex items-center content-center'>{<LoginEL/>}</div>} />
            </Routes>
        </PageTransition>
    )
}