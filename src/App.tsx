import { useState } from "react";
import CardItem from "./components/CardItem";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import { Store, List, Tornado } from "lucide-react";
import { ButtonType } from "./Typscript/TabsType";
import CardPrice from "./components/CardPrice";
import useStore from "./store";
import useTextArea from "./store.area";
import usePrice from "./store.price";
import useInputText from "./store.input";
// import useImageSettingsStore from "./store.image";

function App() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const text: string = useStore((state) => state.text);
  const textArea: string = useTextArea((state) => state.textArea);
  const price: number = usePrice((state) => state.price);


  // const settings: { [key: string]: number } = useImageSettingsStore(
  //   (state) => state.settings
  // );
  const items = useInputText((state) => state.items);
  const displayItems = items.slice(0, 5);

  // const imgFilter: ImgFilter = {
  //   Params: {
  //     brightParams: `brightness(${settings.warmth}%)`,
  //     sepiaParams: `sepia(${settings.sepia / 10})`,
  //     invertParams: `invert(${settings.invert / 255})`,
  //   },
  // };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const buttons: ButtonType[] = [
    { icon: <Store color="#ffffff" />, text: "Store" },
    { icon: <List color="#ffffff" />, text: "List" },
  ];

  const generateHTML = (activeButton: number, text: string) => {
    if (buttons[activeButton]?.text === "Store") {
      return `
        <div className="bg-gradient-to-br max-w-sm from-white to-gray-300 h-auto w-full lg:w-80 flex flex-col rounded-xl shadow-2xl">
          <div className="flex flex-col">
            ${
              imageUrl
                ? `<img src="${imageUrl}" alt="Uploaded" className="h-44 object-cover w-full rounded-t-xl" />`
                : '<div className="text-gray-500 h-40"></div>'
            }
          </div>
          <div className="p-4 flex flex-row items-center justify-between">
            <h2 className="text-2xl text-zinc-800 font-semibold capitalize">${text}</h2>
            <p className="font-mono text-zinc-900"><span>${price}</span><span>$</span></p>
          </div>
          <div>
            <p className="p-4 w-full text-zinc-700 break-words whitespace-normal">${textArea}</p>
          </div>
        </div>
      `;
    } else {
      return `
        <div className="bg-gradient-to-br max-w-sm from-white to-gray-300 h-auto  flex flex-col rounded-xl shadow-2xl p-2 justify-between">
          <div>
            <h2 className="text-2xl text-zinc-800 font-semibold pb-2 capitalize">${text}</h2>
            <hr className="w-full bg-gray-300 border-" />
          </div>
          <ul className="overflow-clip">
            ${displayItems.map(
              (item) => `
                <li className="flex flex-row gap-2 py-3 font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 lucide lucide-badge-check" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#485ae5" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                  <span>${item.textInput}</span>
                </li>`
            ).join('')}
          </ul>
          <div>
            <p className="p-4 text-zinc-700 break-words overflow-wrap text-justify">
              ${textArea}
            </p>
          </div>
        </div>
      `;
    }
  };

  const copyToClipboard: () => void = () => {
    if (activeButton !== null) {
      const html = generateHTML(activeButton, text);
      navigator.clipboard
        .writeText(html)
        .then(() => {
          alert("Get Boxed 📦 !");
        })
        .catch((err) => {
          console.error("Échec de la copie du HTML : ", err);
        });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-grid-magic w-full p-3">
      <header>
        <Header />
      </header>
      <main className="flex justify-center gap-2 xl:gap-4 py-10 flex-col items-center lg:flex-row">
        <div className="flex flex-col">
          <LeftContainer />
          <div className="p-4 flex gap-3 justify-center lg:justify-start">
            {buttons.map((button, index) => (
              <button
                key={index}
                className="bg-gradient-to-br from-indigo-800 to-indigo-500 p-2 rounded-xl shadow-2xl hover:scale-90"
                onClick={() => setActiveButton(index)}
              >
                {button.icon}
              </button>
            ))}
          </div>
        </div>

        <div>
          {activeButton !== null && buttons[activeButton].text === "Store" && (
            <div>
              <CardItem fichier={imageUrl} />
            </div>
          )}

          {activeButton !== null && buttons[activeButton].text === "List" && (
            <div>
              <CardPrice />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-4 rounded text-white font-mono font-sm w-[240px]"
          />
        </div>
      </main>
      <div className="flex items-center w-full justify-center">
        <button
          className="flex flex-row gap-3 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700  p-2 text-white text-xl shadow-2xl"
          onClick={copyToClipboard}
        >
          <span className="font-mono font-bold">Get the Code</span>
          <Tornado color="#ffffff" />
        </button>
      </div>
    </div>
  );
}

export default App;
