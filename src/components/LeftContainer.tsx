import { useState } from "react";
import TabsImg from "./TabsImg";
import TabsText from "./TabsText";

type Props = {};

function LeftContainer({}: Props) {
  const [tabs, setTabs] = useState<number>(0);

  const tabsList: { name: string, component: JSX.Element }[] = [
    { name: "Text", component: <TabsText /> },
    { name: "Img", component: <TabsImg /> }
  ];

  return (
    <div className="bg-gradient-to-br mb-10 lg:mb-0 lg:mr-2 from-white to-gray-400 h-auto w-full p-2 sm:w-[500px] rounded-lg shadow-2xl shadow-black">
      <div className="flex flex-row ">
        
          {tabsList.map((tab, index) => (
            <button
              key={index}
              onClick={() => setTabs(index)}
              className={`px-4 py-2 mr-2 text-white bg-indigo-800 rounded-md focus:outline-none  shadow-2xl mb-3  font-mono  font-bold  ${tabs === index ? 'bg-gradient-to-bl from-indigo-700 to-indigo-400' : ''}`}
            >
              {tab.name}
            </button>
          ))}
        

       
      </div>
      <div className="w-full h-auto">{tabsList[tabs].component}</div>

  
      </div>

  );
}

export default LeftContainer;
