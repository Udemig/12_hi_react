import { useDispatch } from "react-redux";
import { translateText } from "../redux/actions";

const Button = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(translateText())}
      className="bg-zinc-700 text-center px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-zinc-900 cursor-pointer transition mt-3 disabled:brightness-50"
    >
      Çevir
    </button>
  );
};

export default Button;
