import { useDispatch } from "react-redux";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  // const dispatch = useDispatch();
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
