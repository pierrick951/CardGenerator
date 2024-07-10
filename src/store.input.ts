import { create } from "zustand";
import { nanoid } from 'nanoid';

interface InputType {
  id: string;
  textInput: string;
  items: { id: string; textInput: string }[];
  setTextInput: (newTextInput: string) => void;
  addInput: (id: string, textInput: string) => void;
}

const useInputText = create<InputType>((set) => ({
  id: nanoid(),
  textInput: '',
  items: [],
  setTextInput: (newTextInput: string) => set({ textInput: newTextInput }),
  addInput: (id: string, textInput: string) => set((state) => ({
    items: [...state.items, { id, textInput }]
  }))
}));

export default useInputText;
