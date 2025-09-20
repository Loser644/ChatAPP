import {StrictMode} from 'react';
import {ToastContainer} from 'react-toastify';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import MyApp from './components/myApp';
import './assets/style/index.css'
import './assets/style/baseStyle.css'
createRoot(document.getElementById('rootContainer')).render(
    <StrictMode>
        {/* <BrowserRouter>

        </BrowserRouter> */}
        <MyApp/>
        <ToastContainer
            position='bottom-right'
            autoClose={false}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
           // pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
            toastClassName="custom-toast"
        />
    </StrictMode>
)