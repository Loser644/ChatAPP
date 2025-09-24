import {create} from 'zustand';
export const useThemeStore = create((set)=>({
    theme:"light",
    toggleTheme: (inp) =>
        set((state)=>{
            const newTheme =  inp;
            localStorage.setItem("theme",newTheme)
            document.documentElement.setAttribute("data-theme",newTheme);
            return {theme:newTheme};
        }),
}))