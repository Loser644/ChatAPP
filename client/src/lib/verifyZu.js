import {create} from 'zustand';

const verifyZu = create((set)=>({
    VC:"",
    Email:"",
    setMail:(mail)=>set(()=>({Email:mail})),
    setVC:(token)=>set(()=>({VC:token}))
}));

export default verifyZu;