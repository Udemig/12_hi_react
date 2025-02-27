import { BsBasket } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  // useSelector ile reducer'daki state'lere eriş
  const { restaurants } = useSelector((state) => state.restaurantReducers);

  return (
    <header className="shadow">
      <div className="max-w-[1440px] mx-auto p-5 lg:p-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-red-500 font-[900] text-2xl font-mono md:text-3xl"
        >
          ThunkSepeti
        </Link>
        <div className="flex gap-5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            Yakınınızda
            <span>{restaurants.length}</span>
            <IoRestaurant className="text-red-500" />
            <span className="max-md:hidden">Restaurant Var</span>
          </Link>

          <button className=" border py-1 px-3 rounded  text-red-500 hover:bg-red-400 hover:text-white transition max-md:hidden">
            Giriş Yap
          </button>
          <button className=" border py-1 px-3 rounded  text-red-500 hover:bg-red-400 hover:text-white transition max-md:hidden">
            Kaydol
          </button>

          <Link
            to="/cart"
            className="flex items-center gap-2 py-2 px-3 hover:bg-red-100 rounded-full"
          >
            <BsBasket />
            <span>10</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
