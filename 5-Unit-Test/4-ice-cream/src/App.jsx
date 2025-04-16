import Header from "./components/header";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="min-h-screen bg-red-700 text-white py-[30px] 2x:py-[50px] px-[5%]">
      <Header />

      <Home />
    </div>
  );
};

export default App;
