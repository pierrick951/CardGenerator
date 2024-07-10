import { useState } from "react";
import CardItem from "./components/CardItem";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import { Store, ContactRound, List } from "lucide-react";
import { ButtonType } from "./Typscript/TabsType";
import CardProfile from "./components/CardProfile";
import CardPrice from "./components/CardPrice";

function App() {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const buttons: ButtonType[] = [
    { icon: <Store color="#ffffff" />, text: "Store" },
    { icon: <ContactRound color="#ffffff" />, text: "Contact" },
    { icon: <List color="#ffffff" />, text: "List" },
  ];

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
              <CardItem fichier={image} />
       
            </div>
            
          )}
          {activeButton !== null && buttons[activeButton].text === "Contact" && (
            <div>
              <CardProfile fichier={image} />
       
            </div>
            
          )}
          {activeButton !== null && buttons[activeButton].text === "List" && (
            <div>
              <CardPrice/>
       
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
    </div>
  );
}

export default App;
