import {useThemeStore} from '../lib/toggleTheme';
export default function ThemeButton() {
    const {theme,toggleTheme} = useThemeStore();

    return(
<label className="relative inline-flex items-center cursor-pointer">
  <input onClick={toggleTheme} class="sr-only peer" type="checkbox" />
  <div
    class="w-17 h-7 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-gray-900 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-5 after:w-5 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"
  ></div>
  <span className={`"ml-3 text-sm font-medium ${theme=== "light" ? "text-gray-900" :"text-yellow-200"}`}>Theme</span>
</label>

    )
}