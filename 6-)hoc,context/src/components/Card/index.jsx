import { useContext } from "react";
import { BasketContext } from "../../context/basketContext";

const Card = ({ product }) => {
  const { basket, addToBasket } = useContext(BasketContext);
  return (
    <div className="card py-3">
      <div className="d-flex justify-content-center">
        <img
          src={product.image}
          className="object-fit-contain"
          height={120}
          alt="card-image"
        />
      </div>
      <div className="card-body">
        <h4 className="text-truncate">{product.title}</h4>
        <h5 className="text-secondary">{product.category}</h5>
        <button
          className="btn btn-primary  w-100 mt-1"
          onClick={() => addToBasket(product)}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
