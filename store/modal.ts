import { create } from 'zustand';

type ModalStore = {
  activeModal: string;
  setOpen: (modal: string) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: '',
  setOpen: (modal) => set({ activeModal: modal })
}))