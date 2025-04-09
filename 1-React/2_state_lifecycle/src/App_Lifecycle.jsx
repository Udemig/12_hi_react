import { useState } from "react";
import ClassComponent from "./components/ClassComponent.jsx";
import FunctionComponent from "./components/FunctionComponent.jsx";

function App() {
  const [isShow, setIsShow] = useState(true);
  const [isShowFunction, setIsShowFunction] = useState(true);

  return (
    <div>
      <div className="d-flex justify-content-end m-2">
        <button
          className="btn btn-secondary"
          onClick={() => setIsShowFunction(!isShowFunction)}
        >
          Göster/Gizle
        </button>
      </div>
      {isShowFunction && <FunctionComponent />}

      {isShow && <ClassComponent />}
    </div>
  );
}

export default App;
