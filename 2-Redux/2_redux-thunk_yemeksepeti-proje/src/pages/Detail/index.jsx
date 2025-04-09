import { useParams } from "react-router-dom";
import RestaurantDetail from "../../components/RestaurantDetail";
import RestaurantProducts from "../../components/RestaurantProduct";

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="shadow">
        <div className="max-w-[1440px] mx-auto p-5 lg:p-8">
          <RestaurantDetail id={id} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto p-5 lg:p-8">
        <RestaurantProducts id={id} />
      </div>
    </div>
  );
};

export default Detail;
