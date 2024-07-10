import { useState } from "react";
import { nanoid } from "nanoid";
import useInputText from "../store.input";
import { StringVoid } from "../Typscript/TabsType";

const FormsInputts: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const setInput: StringVoid = useInputText((state) => state.setTextInput);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    setInput(value); 
    setInputValue(value); 
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      const newItem = { id: nanoid(), textInput: inputValue };
      useInputText.getState().addInput(newItem.id, newItem.textInput); 
      setInput(''); 
      setInputValue(''); 
    }
    
  };

  return (
    <div className="w-full flex flex-row mb-2 font-mono">
      <div className="flex flex-row items-center">
        <h2 className="pr-2 text-sm"></h2>
        <input
          value={inputValue}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
          type="text"
          className="mb-2 rounded outline-indigo-700 p-2"
        />
      </div>
    </div>
  );
};

export default FormsInputts;
