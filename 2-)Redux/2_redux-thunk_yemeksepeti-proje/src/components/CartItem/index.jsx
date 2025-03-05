import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../redux/actions/basketAction";

const CartItem = ({ item }) => {
  // Dispatch kurulumu
  const dispatch = useDispatch();
  // Sepete ekleme yapacak fonk.
  const handleAdd = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };

  // Sepeetteki ürünleri kaldıran fonk.
  const handleDelete = () => {
    // Sepetteki ürün miktarı 1'den büyükse miktarı birer birer azalt 1 ise bu ürünü sepetten kaldır
    item.amount > 1
      ? dispatch(updateItem(item.id, item.amount - 1))
      : dispatch(deleteItem(item.id));
  };
  return (
    <div className="flex gap-4 border mb-10 p-4 rounded-lg">
      <img src={item.photo} className="w-[115px] rounded-lg" alt="" />

      <div className="w-full flex flex-col justify-between">
        <h3 className="text-red-500 text-xl font-semibold">{item.title} </h3>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{item.price} TL </p>

          <div className="border border-zinc-500 text-xl rounded-lg p-1">
            <button
              onClick={handleDelete}
              className="border px-3 py-2 rounded text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
            >
              {/* Eğer miktar 1 ise çöp kutusu değilse - ikonu render et */}
              {item.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>

            <span className="p-3">{item.amount} </span>

            <button
              onClick={handleAdd}
              className="border  px-3 py-2 rounded text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
