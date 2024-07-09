import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import { Store, ContactRound, List } from "lucide-react";

function App() {
  const buttons = [
    { icon: <Store color="#ffffff" />, text: "Store" },
    { icon: <ContactRound color="#ffffff" />, text: "Contact" },
    { icon: <List color="#ffffff" />, text: "List" },
  ];

  return (
    <div className="min-h-screen flex flex-col fixed bg-grid-magic w-full h-auto p-3">
      <header>
        <Header />
      </header>
      <main className="flex items-center justify-center w-full h-auto flex-wrap md:flex-nowrap py-10">
        <div className="flex flex-col ">
          <LeftContainer />
          <div className="p-4 flex flex-row gap-3 justify-center lg:justify-start">
            {buttons.map((button, index) => (
              <button
                key={index}
                className="bg-gradient-to-br from-indigo-800 to-indigo-500 p-2 rounded-xl shadow-2xl shadow-black hover:scale-90"
              >
                {button.icon}
              </button>
            ))}
          </div>
        </div>

        <div className=""></div>
      </main>
    </div>
  );
}

export default App;
