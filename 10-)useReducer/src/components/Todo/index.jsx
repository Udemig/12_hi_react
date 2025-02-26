import { useReducer } from "react";
import todoReducer from "../../reducer/todoReducer";
import actionTypes from "../../reducer/actionTypes";
actionTypes;

const TodoList = () => {
  const initialState = {
    todos: [],
    isAdmin: false,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const handleSubmit = (e) => {
    // Sayfa yenilmesini engelle
    e.preventDefault();

    // Inputtaki değere eriş
    const text = e.target[0].value;

    // reducer'a actionı ilet.Action ise bizden bir type birde payload ister.type ilgili actioın tipini belirtir payload ise state aktarılacak değeri belirtir.
    dispatch({ type: actionTypes.create, payload: text });

    e.target.reset();
  };

  console.log(state.isAdmin);

  return (
    <div className="container p-4">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="text-center fw-bold mb-3">
          {state.isAdmin ? "Admin Listesi" : "Kullanıcı Listesi"}{" "}
        </h1>

        <button onClick={() => dispatch({ type: actionTypes.toggle })}>
          Yönetici Girişi
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="d-flex gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Todo giriniz ..."
        />
        <button className="btn  btn-success px-4 fs-5">Ekle</button>
      </form>

      {/* List */}

      <ul className="mt-5 list-group">
        {state.todos.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center mb-3 rounded "
          >
            <span>{item.text} </span>
            <button
              onClick={() =>
                dispatch({ type: actionTypes.delete, payload: item.id })
              }
              className="btn btn-danger"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
