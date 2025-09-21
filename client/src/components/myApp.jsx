import PageTransition from '../assets/animations/framerMotion'
import {Routes,Route, useLocation} from 'react-router-dom';
import LoginEL from '../Page/Login/baseFIle';
import Header from '../Page/BaseComponent/header';
export default function MyApp() {
    let location = useLocation();

    return(
        <PageTransition location={location} key={location.pathname}>
           <Header/>
            <Routes>
                <Route path='/' element={<div className='routeContainer flex items-center content-center'>{<LoginEL/>}</div>} />
            </Routes>
        </PageTransition>
    )
}