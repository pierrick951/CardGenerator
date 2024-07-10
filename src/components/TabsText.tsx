import { List } from "lucide-react"
import { useState } from "react"
import { createPortal } from "react-dom"
import { BooleanType, StringVoid ,NumVoid} from '../Typscript/TabsType';

import ConfigList from "./ConfigList"


import useStore from "../store";
import useTextArea from "../store.area";
import usePrice from "../store.price";



type Props = {}

function TabsText({}: Props) {

  
const [showPortal, setShowPortal]:BooleanType= useState<boolean>(false)

const setText: StringVoid = useStore((state) => state.setText);
const setTextArea = useTextArea((state) => state.setTextArea);
const setPrice:NumVoid =  usePrice((state) => state.setPrice)




const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event: React.ChangeEvent<HTMLInputElement>) => {
  setText(event.target.value);
};

const handleChangeArea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setTextArea(event.target.value)
};

const handleChangePrice = (event:React.ChangeEvent<HTMLInputElement>) => {
  const newPrice = parseFloat(event.target.value)

  if (!isNaN(newPrice)){
    setPrice(newPrice)
  } 
}
const closePortale: () => void = () => setShowPortal(!showPortal)
  return (
    <div className=" w-auto  h-auto rounded p-2">
      <div className=" p-2 flex flex-col">
        <label htmlFor="text" className="text-zinc-800 font-semibold font-mono  text-lg pb-2">Title</label>
        <input 
        onChange={handleChange}
        type="text" placeholder="Here your title"  className="rounded-lg text-xs resize-x p-2 h-10  outline-indigo-900" />
      </div>
     
      <div className=" p-2 flex flex-col">
        <label
         htmlFor="text" 
        className="text-zinc-800 font-semibold  text-lg pb-2 font-mono"
        >Text</label>
        <textarea 
       
           onChange={handleChangeArea}
        name="" 
        id="" 
        className="rounded-lg resize-y p-2  outline-indigo-900 font-mono font-xs" placeholder="Your Text"></textarea>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="text-zinc-800 font-semibold font-mono  text-lg pb-2 p-2">
          <h3  className="flex flex-row gap-2 items-center">
            <span>Price</span>
            <small className="text-sm text-gray-400"> only for card item</small>
          </h3>
          <div>
          <input 
          onChange={handleChangePrice}
          type="text" 
          placeholder="set price "  
          className="rounded-lg w-52 p-1 h-10  outline-indigo-900 text-xs font-normal" />
          </div>
        </div>
        <button 
        onClick={closePortale}
        className="flex flex-row bg-indigo-400 p-2 rounded animate-pulse translate-y-3 md:translate-y-3 md:-translate-x-2 cursor-pointer hover:bg-indigo-600">
          <List color="#ffffff" />
        </button>
      </div>

      {showPortal &&
        createPortal(
          <ConfigList  close={closePortale}/>,
          document.body
        )}
    </div>
  )
}
export default TabsText