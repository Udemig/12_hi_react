import { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import BasketItem from "../../components/BasketItem";
import BasketInfo from "../../components/BasketInfo";
import Total from "../../components/Total";

const Basket = () => {
  const { basket } = useContext(BasketContext);
  return (
    <div className="container mt-5">
      <h1>SEPET</h1>
      <div className="row">
        <div className="col-lg-8">
          {basket.length === 0 ? (
            <BasketInfo />
          ) : (
            basket.map((item) => <BasketItem key={item.id} item={item} />)
          )}
        </div>
        <div className="col-lg-4">
          <Total />
        </div>
      </div>
    </div>
  );
};

export default Basket;
