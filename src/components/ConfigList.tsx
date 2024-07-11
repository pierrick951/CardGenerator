import FormsInputts from "./FormsInputts";
type Props = {
  close: () => void;
};

const ConfigList: React.FC<Props> = ({ close }) => {


  return (
    <div
      onClick={close}
      className="fixed z-10 top-0 left-0 w-full h-full bg-zinc-800/80 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-white to-gray-400 h-auto w-auto p-5 rounded-xl flex flex-col justify-center items-center"
      >
        <div>
          <h2 className="py-2 font-bold text-indigo-500 font-mono text-xl">
            Config Item list
          </h2>
        </div>
        <div className="flex flex-col">
          <FormsInputts />
          <div className="flex justify-center">
            <button
              onClick={close}
              className="bg-gradient-to-br from-indigo-700 to-indigo-500 p-2 rounded hover:bg-indigo-700"
            >
              <span className="text-white font-bold">Finish</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigList;
