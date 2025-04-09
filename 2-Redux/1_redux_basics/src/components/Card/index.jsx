import { useDispatch } from "react-redux";
import Modal from "../Modal";
import { useState } from "react";
import actionTypes from "../../redux/actionTypes";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { changeTodoStatus, deleteTodo } from "../../redux/actions/actions";

const Card = ({ item }) => {
  const [isShow, setIsShow] = useState(false);

  // Silme işlemi yapan fonksiyon
  const handeleDelete = () => {
    api
      .delete(`/todos/${item.id}`)
      .then(() => {
        dispatch(deleteTodo(item.id));
        toast.info("Silme işlemi başarıyla gerçekleşti");
      })
      .catch((err) => {
        toast.error("Silme işlemi sırasında bir hata oluştu");
      });
  };

  // is_done durumunu tersine çeviren fonksiyon
  const handleStatus = () => {
    api
      .patch(`/todos/${item.id}`, { is_done: !item.is_done })
      .then(() => {
        dispatch(changeTodoStatus(item));
        toast.success("İşlem başarılı bir şekilde gerçekleştirildi.");
      })
      .catch((err) => {
        toast.error("İşlem gerçekleştirilemedi");
      });
  };

  // Dispatch kurulumu
  const dispatch = useDispatch();
  return (
    <>
      <div className="border rounded p-4 my-5 shadow-lg">
        <h5 className="fs-1">{item.text} </h5>
        <h6 className={item.is_done ? "text-success" : "text-danger"}>
          {item.is_done ? "Tamamlandı" : "Devam Ediyor"}
        </h6>

        <div className="d-flex gap-4 mt-3">
          <button onClick={() => setIsShow(true)} className=" btn btn-primary">
            Düzenle
          </button>
          <button
            onClick={handleStatus}
            className={
              item.is_done ? "btn btn-secondary " : "btn btn btn-success"
            }
          >
            {item.is_done ? "Geri Al" : "Tamamla"}
          </button>
          <button onClick={handeleDelete} className="btn btn-danger">
            Sil
          </button>
        </div>
      </div>

      {isShow && <Modal item={item} close={() => setIsShow(false)} />}
    </>
  );
};

export default Card;
