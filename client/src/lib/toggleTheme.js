import {create} from 'zustand';
export const useThemeStore = create((set)=>({
    theme:"light",
    toggleTheme: () =>
        set((state)=>{
            const newTheme = state.theme === "light" ? "dark" : "light";

            document.documentElement.setAttribute("data-theme",newTheme);

            return {theme:newTheme};
        }),
}))