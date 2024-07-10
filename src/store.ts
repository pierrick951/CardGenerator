import { create } from 'zustand';

interface InputForm {
  text: string;
  setText: (newText: string) => void;
}

const useStore = create<InputForm>((set) => ({
  text: '',
  setText: (newText: string) => set({ text: newText }),
}));

export default useStore;
