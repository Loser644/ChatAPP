import { useEffect, useRef } from 'react';
import {useThemeStore} from '../lib/toggleTheme';
export default function ThemeButton() {
    const {theme,toggleTheme} = useThemeStore();
    let inpRef=useRef();
    const handler = ()=>{
      let inp = theme==="light" ? "dark" : "light";
      toggleTheme(inp);
    }
    useEffect(()=>{
      let currentinp = inpRef.current;
      theme === "dark" ? currentinp.checked = true:"";
    },[])
    return(
<label className="relative inline-flex items-center cursor-pointer">
      <input ref={inpRef}  
        type="checkbox" onClick={handler}
        // checked={theme === "dark"} // make it reflect the current theme
        className="sr-only peer"
      />
      <div
        className="w-15 h-6 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 flex items-center 
          peer-checked:from-gray-900 peer-checked:to-indigo-500 
          transition-all duration-500 
          after:content-['☀️'] after:absolute after:left-1 after:bg-skin-bg after:rounded-full after:h-5 after:w-5 
          after:flex after:items-center after:justify-center 
          after:transition-all after:duration-500 
          peer-checked:after:translate-x-8 peer-checked:after:content-['🌙'] 
          after:shadow-md after:text-lg"
      ></div>
    </label>

    )
}