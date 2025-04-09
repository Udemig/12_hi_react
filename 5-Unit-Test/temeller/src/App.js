import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Counter from "./components/counter";
import Accordion from "./components/accordion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link">React Öğren</a>

        <Button />

        <Counter />

        <Accordion />
      </header>
    </div>
  );
}

export default App;
