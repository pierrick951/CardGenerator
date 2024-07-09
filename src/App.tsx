import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";

function App() {
  return (
    <div className="min-h-screen flex flex-col fixed bg-grid-magic w-full h-auto p-3">
      <header>
        <Header />
      </header>
      <main className="flex items-center justify-center w-full h-auto flex-wrap md:flex-nowrap py-10">
           <LeftContainer/> 
     
        <div className=""></div>
      </main>
    </div>
  );
}

export default App;
