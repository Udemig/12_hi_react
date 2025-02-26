import { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import { toast } from "react-toastify";

const Total = () => {
  const { basket } = useContext(BasketContext);
  // Dizideki toplam amount miktarını hesapla
  const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);

  // Toplam fiyatı hesapla

  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  return (
    <div className="rounded my-5 shadow border p-4 d-flex flex-column justify-content-between">
      <div className="fs-5">
        <p>
          Sepette <span className="text-warning fw-bold">{totalAmount} </span>
          adet ürün var
        </p>

        <p>
          Toplam Fiyat: <span>{totalPrice.toFixed(2)} </span> $
        </p>
      </div>

      <button
        onClick={() => toast.success("Sepetiniz onaylandı !")}
        className="btn btn-success py-2 px-3"
      >
        Sepeti Onayla
      </button>
    </div>
  );
};

export default Total;
