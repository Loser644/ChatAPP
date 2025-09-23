import {create} from 'zustand';
export const Loader = create((set)=>({
    isTrue:true,
    toggleLoader: ()=>
        set((state)=>{
            const newState = !state.isTrue;
            return {isTrue:newState}
        })
}))