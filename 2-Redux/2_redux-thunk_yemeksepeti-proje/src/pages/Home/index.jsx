import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import { getRestaurants } from "../../redux/actions/restaurantActions";
import Loader from "../../components/Loader";
import RestaurantCard from "../../components/RestaurantCard";

const Home = () => {
  // dispatch kurulumu
  const dispatch = useDispatch();
  const { error, isLoading, restaurants } = useSelector(
    (state) => state.restaurantReducers
  );

  // Tekrar api isteği atan fonk.
  const retry = () => dispatch(getRestaurants());

  return (
    <div className="max-w-[1440px] mx-auto p-5 lg:p-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} retry={retry} />
      ) : (
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} data={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
