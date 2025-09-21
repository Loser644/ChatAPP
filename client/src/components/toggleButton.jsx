import {useThemeStore} from '../lib/toggleTheme';
export default function ThemeButton() {
    const {theme,toggleTheme} = useThemeStore();

    return(
        <button onClick={toggleTheme} className="relative px-2 py-3 rounded-lg text-white font-semibold 
          bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 ... active:brightness-90
          hover:opacity-90 active:scale-95 transition-all duration-700
          shadow-md overflow-hidden cursor-pointer">
        
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 hover:opacity-20 transition"></span>

          {theme === "light"? "🌞 light" : "🌚 dark"}
        </button>

    )
}