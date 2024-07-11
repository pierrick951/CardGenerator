import useStore from "../store";
import useTextArea from "../store.area";
import usePrice from "../store.price";
import useImageSettingsStore from '../store.image';

type Props = {
  fichier: string | ArrayBuffer | null;
};

function CardItem({ fichier }: Props) {
  const text: string = useStore((state) => state.text);
  const textArea: string = useTextArea((state) => state.textArea);
  const price: number = usePrice((state) => state.price);
  const settings = useImageSettingsStore((state) => state.settings);



  return (
    <div className="bg-gradient-to-br max-w-sm from-white to-gray-300 h-auto w-full lg:w-80 flex flex-col rounded-xl shadow-2xl">
      <div className="flex flex-col">
        {fichier ? (
          <img
            src={fichier as string}
            alt="Uploaded"
            className="h-44 object-cover w-full rounded-t-xl"
            style={{
              filter: `
                brightness(${settings.warmth}%)
                sepia(${settings.sepia / 10})
                invert(${settings.invert / 255})
              `,
            }}
          />
        ) : (
          <div className="text-gray-500 h-40"></div>
        )}
      </div>
      <div className="p-4 flex flex-row items-center justify-between">
        <h2 className="text-2xl text-zinc-800 font-semibold capitalize">
          {text}
        </h2>
        <p className="font-mono text-zinc-900">
          <span>{price}</span>
          <span>$</span>
        </p>
      </div>
      <div>
        <p className="p-4 w-full text-zinc-700 break-words whitespace-normal">
          {textArea}
        </p>
      </div>
    </div>
  );
}

export default CardItem;
