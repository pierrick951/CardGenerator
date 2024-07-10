import useInputText from "../store.input";
import { BadgeCheck } from "lucide-react";
import useStore from "../store";
import useTextArea from "../store.area";

const CardPrice: React.FC = () => {
  const text: string = useStore((state) => state.text);
  const textArea: string = useTextArea((state) => state.textArea);
  const items = useInputText((state) => state.items);
  const displayItems = items.slice(0, 5);
  return (
    <div className="bg-gradient-to-br from-white to-gray-300 h-auto w-auto flex flex-col rounded-xl shadow-2xl p-2 justify-between">
      <div className="">
        <h2 className="text-2xl text-zinc-800 font-semibold pb-2 capitalize">
          {text}
        </h2>
        <hr className="w-full bg-gray-300 border- " />
      </div>
      <ul className="overflow-clip">
        {displayItems.map((item) => (
          <li key={item.id} className="flex flex-row gap-2 py-3 font-semibold">
            <BadgeCheck color="#485ae5" className="w-5" />
            <span>{item.textInput}</span>
          </li>
        ))}
      </ul>

      <p
        className="p-4 text-zinc-700 word-wrap-normal
        "
      >
        {textArea}
      </p>
    </div>
  );
};

export default CardPrice;
