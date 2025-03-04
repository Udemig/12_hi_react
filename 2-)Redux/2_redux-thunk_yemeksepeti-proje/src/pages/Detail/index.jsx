import RestaurantDetail from "../../components/RestaurantDetail";
import RestaurantProducts from "../../components/RestaurantProduct";

const Detail = () => {
  return (
    <div>
      <div className="shadow">
        <div className="max-w-[1440px] mx-auto p-5 lg:p-8">
          <RestaurantDetail />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto p-5 lg:p-8">
        <RestaurantProducts />
      </div>
    </div>
  );
};

export default Detail;
