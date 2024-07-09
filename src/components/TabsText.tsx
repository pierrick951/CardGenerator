type Props = {}
function TabsText({}: Props) {
  return (
    <div className=" w-auto  h-auto rounded p-2">
      <div className=" p-2 flex flex-col">
        <label htmlFor="text" className="text-zinc-800 font-semibold font-mono  text-lg pb-2">Title</label>
        <input type="text" placeholder="Here your title"  className="rounded-sm resize-x p-1 outline-teal-900" />
      </div>
     
      <div className="text-zinc-800 font-semibold font-mono  text-lg pb-2 p-2">
        <h3  className="flex flex-row gap-2 items-center">
          <span>Price</span>
          <small className="text-sm text-gray-400"> only for card item</small>
        </h3>

        <div>
     
        <input type="text" placeholder="set price "  className="rounded-sm w-full p-1 outline-teal-900 text-sm font-normal" />
        </div>
      </div>
      <div className=" p-2 flex flex-col">
        <label
         htmlFor="text" 
        className="text-zinc-800 font-semibold   text-lg pb-2 font-mono"
        >Text</label>
        <textarea 
        name="" 
        id="" 
        className="rounded-sm resize-y p-1 outline-teal-900 font-mono" placeholder="Your Text"></textarea>
      </div>
    </div>
  )
}
export default TabsText