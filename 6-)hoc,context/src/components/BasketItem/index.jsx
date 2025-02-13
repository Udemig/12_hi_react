import { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa6";
const BasketItem = ({ item }) => {
  const { basket, addToBasket, removeFromBasket, decreaseAmount } =
    useContext(BasketContext);
  return (
    <div className="d-flex align-items-center gap-3 bg-body text-black p-3 rounded mt-3">
      {/* Image */}
      <div>
        <img
          src={item.image}
          height={80}
          width={80}
          className="object-fit-contain"
          alt="card-image"
        />
      </div>
      {/* Info */}
      <div className="w-100 ">
        <div>
          <h5>{item.title.slice(0, 40) + "..."} </h5>
          <p className="text-secondary">{item.category} </p>
        </div>
        <div className="d-flex justify-content-end gap-4 align-items-center">
          <span> Price: {item.price * item.amount} </span>

          <div className="d-flex gap-3">
            <button
              onClick={() => decreaseAmount(item.id)}
              className=" btn btn-danger"
            >
              <FaMinus />
            </button>
            <button
              onClick={() => addToBasket(item)}
              className="btn btn-success"
            >
              <FaPlus />
            </button>

            <button
              onClick={() => removeFromBasket(item.id)}
              className="btn btn-info"
            >
              <FaTrash />
            </button>
          </div>

          <h5>Amount: {item.amount}</h5>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
