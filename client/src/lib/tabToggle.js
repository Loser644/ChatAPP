import {create} from 'zustand';

const FaceToggle = create((set)=>({
    currentTab:"front",
    setTab:(tab)=>set(()=>({currentTab:tab}))
}))

export default FaceToggle;