import { create } from "zustand";

interface AreaType {
    textArea: string;
    setTextArea: (newTextArea: string) => void;
}

const useTextArea = create<AreaType>((set) => ({
    textArea: '',
    setTextArea: (newTextArea: string) => set({ textArea: newTextArea }), 
}));

export default useTextArea;
