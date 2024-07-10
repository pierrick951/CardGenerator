import { BadgeCheck } from "lucide-react"

type Props = {}

function CardPrice({}: Props) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-300   h-auto w-auto flex flex-col rounded-xl shadow-2xl p-2 justify-between">
         <div className="">
             <h2 className="text-2xl text-zinc-800 font-semibold pb-2">Service</h2>
             <hr  className="w-full bg-gray-300 border- "/>
         </div>
            <ul className=" overflow-clip ">
                <li className=" flex flex-row gap-2 py-3 font-semibold">
                <BadgeCheck color="#485ae5" className="w-5" />
                <span>lorem</span>
                </li>
                <li className=" flex flex-row gap-2 py-3 font-semibold ">
                <BadgeCheck color="#485ae5" className="w-5" />
                <span>loremgggggggg</span>
                </li>
                <li className=" flex flex-row gap-2 py-3 font-semibold">
                <BadgeCheck color="#485ae5" className="w-5" />
                <span>lorem</span>
                </li>
                <li className=" flex flex-row gap-2 py-3 font-semibold ">
                <BadgeCheck color="#485ae5" className="w-5" />
                <span>lorem</span>
                </li>
                <li className=" flex flex-row gap-2 py-3 font-semibold">
                <BadgeCheck color="#485ae5" className="w-5" />
                <span>lorem</span>
                </li>
               
     
            
            </ul>
            <div className="w-40 py-2 font-mono">
                    <p>teeeeeeeeeeeeeeeeeuff  feofeqfqd  ekfezfs us?</p>
                </div>
       
    </div>
  )
}
export default CardPrice