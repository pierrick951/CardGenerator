type Props = {
  fichier: string | ArrayBuffer | null;
};

function CardProfile({ fichier }: Props) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-300   h-auto w-auto lg:w-80  rounded-xl shadow-2xl flex flex-col sm:flex-row p-2 gap-3 ">
      <div className="h-full w-full ">
        {fichier ? (
          <img
            src={fichier as string}
            alt="Uploaded"
            className=" h-60 object-cover w-50 rounded-xl"
          />
        ) : (
          <div className="text-gray-500 h-40"></div>
        )}
      </div>
      <div className="w-1/2 flex gap-2 flex-col justify-evenly">
        <h2>Titre</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nam a aspernatur laudantium id atque sequi sit provident illum dicta assumenda repellat necessitatibus minus, esse dolore. Natus debitis sit amet.</p>
    </div>
    </div>
  );
}
export default CardProfile;
