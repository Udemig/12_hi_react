import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  return (
    <Link
      className=" relative shadow rounded-lg overflow-hidden cursor-pointer"
      to={`restaurant/${data.id}`}
    >
      <span className="bg-red-500 p-1 px-3 text-sm absolute end-1 top-2 rounded-md text-white">
        {data.distance} km uzaklıkta
      </span>
      <img
        src={data.photo}
        className="w-full object-cover max-h-[300px]"
        alt="photo"
      />

      <div className="p-3">
        {/* Title && Raiting */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-xl font-semibold">{data.name} </h3>
          <p className="flex items-center gap-2 text-red-500">
            <FaStar /> {data.rating}
          </p>
        </div>

        {/* Price */}
        <p className="text-sm my-3 text-gray-5000">
          {data.minPrice} TL minimum
        </p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
