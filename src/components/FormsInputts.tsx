import { FormField } from "../Typscript/TabsType";

type Props = {
  field: FormField;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormsInputts({ field, onchange}: Props) {
  return (
    <div className="w-full flex flex-row mb-2 font-mono" 
    onClick={e => e.stopPropagation()}>
      <div className=" flex flex-row item-center">
        <h2 className="pr-2 text-sm">{field.label}</h2>
      <input 
      onChange={onchange}
      type="text"
       className="mb-2 rounded outline-indigo-700" />
      </div>
        
    </div>
  );
}
export default FormsInputts;
