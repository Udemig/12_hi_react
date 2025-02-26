import { useDispatch } from "react-redux";
import Modal from "../Modal";
import { useState } from "react";
import actionTypes from "../../redux/actionTypes";

const Card = ({ item }) => {
  const [isShow, setIsShow] = useState(false);

  console.log(isShow);

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
            onClick={() =>
              dispatch({ type: actionTypes.toggle, payload: item })
            }
            className={
              item.is_done ? "btn btn-secondary " : "btn btn btn-success"
            }
          >
            {item.is_done ? "Geri Al" : "Tamamla"}
          </button>
          <button
            onClick={() =>
              dispatch({ type: actionTypes.delete, payload: item.id })
            }
            className="btn btn-danger"
          >
            Sil
          </button>
        </div>
      </div>

      {isShow && <Modal item={item} close={() => setIsShow(false)} />}
    </>
  );
};

export default Card;
