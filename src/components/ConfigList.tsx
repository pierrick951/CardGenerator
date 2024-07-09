import { useState } from "react";
import FormsInputts from "./FormsInputts";
import { FormField } from "../Typscript/TabsType";

type Props = {
  close: () => void;
};


export default function ConfigList({ close }: Props) {

  const [formFields, setFormFields] = useState<FormField[]>([
    { label: "Item 1", value: "" },
    { label: "Item 2", value: "" },
    { label: "Item 3", value: "" },
    { label: "Item 4", value: "" },
    { label: "Item 5", value: "" },
  ]);

  const handleinputChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {

      const NewFormFields: FormField[] = [...formFields];

      NewFormFields[index].value = e.target.value

      setFormFields(NewFormFields)
    };


  return (
    <div
      onClick={close}
      className="fixed z-10 top-0 left-0 w-full h-full bg-zinc-800/80 flex justify-center items-center"
    >
      <div className="bg-gradient-to-br from-white to-gray-400 h-auto w-full md:w-80 p-5 rounded-xl">
        <div>
            <h2 className="py-2 font-bold text-indigo-800 font-mono text-xl">Config Item list</h2>
        </div>
        <div>
        {formFields.map((field:FormField, index:number ) => (

            <FormsInputts
             field={field}
             onchange={handleinputChange(index)}
             key={index}
            />
        ))}
             <div className="flex justify-center ">
                 <button 
                 onClick={close}
                 className=" bg-indigo-800 p-2 rounded hover:bg-indigo-700">
                    <span className="text-white font-bold">Finnish</span>
                 </button>
             </div>
      </div>
      </div>
      
    </div>
  );
}
