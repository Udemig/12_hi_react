import actionTypes from "../actionTypes";

// Nesne oluşturan fonksiyonlar ile dispatch işlemi sırasındaki kod tekrarı azaltılır
const addTodo = (payload) => {
  return { type: actionTypes.add, payload };
};
const deleteTodo = (payload) => {
  return { type: actionTypes.delete, payload };
};
const changeTodoStatus = (payload) => {
  return { type: actionTypes.toggle, payload };
};
const updateTodo = (payload) => {
  return { type: actionTypes.update, payload };
};

export { deleteTodo, changeTodoStatus, addTodo, updateTodo };
