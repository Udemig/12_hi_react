const Button = ({ isSign }) => {
  return (
    <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300 cursor-pointer">
      {isSign ? "Kaydol" : "Giriş Yap"}
    </button>
  );
};

export default Button;
