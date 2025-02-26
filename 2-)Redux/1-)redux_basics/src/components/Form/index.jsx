import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import actionTypes from "../../redux/actionTypes";
const Form = () => {
  // Dispatch kurulumu
  const dispatch = useDispatch();

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilmesini engelle
    e.preventDefault();

    // Inputtaki değere eriş
    const text = e.target[0].value;

    //  Reducer'a iletilecek bir nesne oluştur

    const newTodo = {
      id: v4(),
      text,
      is_done: false,
      createdAt: new Date().getTime(),
    };

    // Dispatch ile reducer'a aksiyon ilet

    dispatch({ type: actionTypes.add, payload: newTodo });

    // Formu resetle
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 mt-4">
      <input
        type="text"
        placeholder="Ör:React Redux Öğren"
        className="form-control"
      />
      <button className="btn btn-warning">Ekle</button>
    </form>
  );
};

export default Form;
