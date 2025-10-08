import {create} from 'zustand';

const verifyZu = create((set) => ({
  username: "",
  email: "",
  verifyTab: false,

  setMail: (mail) => set(() => ({ email: mail })),
  setTUsername: (name) => set(() => ({ username: name })),
  setVTab: () => set((state) => ({ verifyTab: !state.verifyTab })),
}));
export default verifyZu;