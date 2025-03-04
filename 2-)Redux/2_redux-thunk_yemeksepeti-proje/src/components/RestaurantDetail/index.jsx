import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Loader from "../Loader";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";

const RestaurantDetail = () => {
  // Url'deki parametreye eriş
  const { id } = useParams();
  // Bileşen içerisinde verileri yönetmek için useState kurulumu yap

  const [restaurant, setRestaurant] = useState(null);

  // Restaurant id'sine göre verileri api'dan al
  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <>
      {!restaurant ? (
        <Loader />
      ) : (
        <div className="flex gap-5">
          <img
            src={restaurant.photo}
            className="w-[150px] rounded-md"
            alt="restaurant-photo"
          />

          <div className="flex flex-col justify-between">
            <div className="flex gap-4">
              <p className="flex items-center gap-2">
                <FaArrowDown className="text-red-500" />
                <span className="text-gray-500">
                  min {restaurant.minPrice} TL
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-red-500" />
                <span className="text-gray-500">
                  {restaurant.estimatedDelivery} dak.
                </span>
              </p>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {restaurant.name}{" "}
            </h1>

            <div className="flex items-center gap-2">
              <FaStar className="text-red-500" />
              <span>{restaurant.rating} </span>

              <button className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition">
                Yorumları Gör
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDetail;
