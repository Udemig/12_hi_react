import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import actionTypes from "../../redux/actionTypes";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { updateTodo } from "../../redux/actions/actions";
const Modal = ({ close, item }) => {
  const inputRef = useRef();

  // Dispatch kurulumu
  const dispatch = useDispatch();

  const handleClick = () => {
    //Inputtaki değere eriş
    const newText = inputRef.current.value;

    // Yeni bir obje oluştur
    const updatedTodo = {
      // spread operatör (...) ile buradaki obje içerisindeki [is_done,createdAt] değerleri muhafaza ederek sadece text değerini güncelledik
      ...item,
      text: newText,
    };

    // Oluşturulan objeyi reducer'a ilet

    api
      .patch(`/todos/${item.id}`, { text: newText })
      .then(() => {
        dispatch(updateTodo(updatedTodo));
        toast.success("Güncelleme işlemi başarılı bir şekilde gerçekleşti");
      })
      .catch((err) => {
        toast.error("Güncelleme işlemi sırasında bir hata oluştu");
      });

    // Modal'ı kapat
    close();
  };
  return (
    <div className="modal d-block bg-blur" tabIndex="-1" role="dialog">
      <div
        className="modal-dialog modal-dialog-centred text-black"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title">Todo'yu Güncelle</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <button onClick={close} className="btn btn-dark btn-sm">
                X
              </button>
            </button>
          </div>
          <div className="modal-body">
            <div>
              <label className="fw-bold mb-2">Yeni Başlık:</label>
              <input
                defaultValue={item.text}
                ref={inputRef}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary"
            >
              Kaydet
            </button>
            <button
              onClick={close}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
