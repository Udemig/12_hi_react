const Error = ({ retry, info }) => {
  return (
    <div>
      <div className="bg-red-100 mt-20 p-10 text-center text-lg rounded-md">
        <p>Üzgünüz işlem sırasında bir hata oluştu.</p>
        <p className="font-semibold">{info}</p>
      </div>

      <div className="flex justify-center my-10">
        <button
          className="border py-2 px-4 rounded-md hover:bg-zinc-300 transition"
          onClick={retry}
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
};

export default Error;
