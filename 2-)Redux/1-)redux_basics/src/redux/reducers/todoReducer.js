import actionTypes from "../actionTypes";

const initialState = {
  todos: [],
  isDarkMode: false,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.add:
      // Action'ın payload'ında yer alan değeri todo içerisinde aktar
      const newTodos = state.todos.concat(action.payload);

      return { ...state, todos: newTodos };
    case actionTypes.delete:
      // Silinecek  elemanı todos içerisinden filtrele
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filtred };

    case actionTypes.toggle:
      // Güncellenecek elemanın diğer değerleri sabit kalsın is_done değerini tersine çevir
      const updated = { ...action.payload, is_done: !action.payload.is_done };

      // Güncellenen elemanı todos dizisine aktar
      const updatedTodos = state.todos.map((i) =>
        i.id === updated.id ? updated : i
      );
      // State'i güncelle
      return { ...state, todos: updatedTodos };

    case actionTypes.update:
      // Güncellenen elemanı todos dizisi içerisinden bul ve güncelle
      const editedTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      // State'i güncelle
      return { ...state, todos: editedTodos };
    default:
      return state;
  }
};

export default todoReducer;
