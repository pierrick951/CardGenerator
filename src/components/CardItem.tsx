type Props = {
  fichier: string | ArrayBuffer | null;
};

function CardItem({ fichier }: Props) {
  return (
    <div className=" bg-gradient-to-br from-white to-gray-300   h-auto w-full lg:w-80 flex flex-col rounded-xl shadow-2xl  ">
      <div className=" flex flex-col">
        {fichier ? (
          <img
            src={fichier as string}
            alt="Uploaded"
            className=" h-44 object-cover w-full rounded-t-xl"
          />
        ) : (
          <div className="text-gray-500 h-40"></div>
        )}
      </div>
      <div className="p-4 flex flex-row items-center justify-between">
        <h2 className="text-2xl text-zinc-800 font-semibold">item</h2>
        <p className="font-mono text-zinc-900">
          <span>9.99</span>
          <span>$</span>
        </p>
      </div>
      <div>
        <p className="p-4 text-zinc-700 word-wrap-normal
        ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,lorem500

        </p>
      </div>
    </div>
  );
}

export default CardItem;
