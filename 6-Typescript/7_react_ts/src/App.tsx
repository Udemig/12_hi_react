import { useRef, useState } from "react";
import Button from "./components/button";
import Form from "./components/form";

const App = () => {
  // state tanımlarken state'de tutulan değişkenin tipini tanımlarız
  const [count, setCount] = useState<number>(0);

  // ref tanımlarken referansı tutulacak elementini tipini tanımlarız
  const buttonRef = useRef<HTMLButtonElement>(null);

  // getElement methodları ile element alınca as operatörü ile tipi değiştiriririz
  const element = document.getElementById("refresh") as HTMLButtonElement;

  return (
    <div>
      <button id="refresh">Yenile</button>

      <button ref={buttonRef}>x</button>

      <button onClick={() => setCount(count - 1)}>-</button>

      <span>{count}</span>

      <button onClick={() => setCount(count + 1)}>+</button>

      <Button text="Bana Tıkla" />

      <Form />
    </div>
  );
};

export default App;
