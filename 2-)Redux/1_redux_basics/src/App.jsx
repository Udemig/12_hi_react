import { useDispatch } from "react-redux";
import Form from "./components/Form";
import List from "./components/List";
import { useEffect } from "react";
import api from "./utils/api";
import actionTypes from "./redux/actionTypes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/todos")
      .then((res) => dispatch({ type: actionTypes.set, payload: res.data }));
  }, []);
  return (
    <div className="vh-100">
      <div className="container p-5">
        <h1 className="text-center fs-1">
          <span className="text-warning">Redux</span>Crud
        </h1>

        <Form />

        <List />
      </div>
    </div>
  );
};

export default App;
