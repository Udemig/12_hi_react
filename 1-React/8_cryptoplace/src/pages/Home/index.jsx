import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import CoinItem from "../../components/CoinItem";

const Home = () => {
  // Context yapısı içerisinden verileri al
  const { allCoin } = useContext(CoinContext);

  console.log(allCoin);

  // Bileşen ekrana geldiğinde  displayCoin'in değerini api'dan gelen tüm coinler olarak ata
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  const [displayCoin, setDisplayCoin] = useState([allCoin]);
  const [input, setInput] = useState("");

  // Aratılan kelimeyi tüm coinler içerisinde filtrele ve bulunan coini renderla
  const searchHandler = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Inputtan girilen coin adına göre tüm coinler arasında filtreleme yap
    const filtredCoin = allCoin.filter((item) => item.name.includes(input));

    setDisplayCoin(filtredCoin);
  };

  // Input değiştiğinde gelen kelimeyi input stateine ata
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="px-4">
      {/* Top */}
      <div className="max-w-2xl mx-auto my-16 flex flex-col items-center gap-6 ">
        <h1 className="text-4xl font-bold leading-tight text-center">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="w-3/4 text-[#e3e3e3] leading-7 ">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        {/* Form */}
        <form
          onSubmit={searchHandler}
          className="flex w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden"
        >
          <input
            type="text"
            className="flex-1 px-4 py-2 text-base border-none text-black"
            placeholder="Search crypto ..."
            value={input}
            onChange={inputHandler}
            list="coinlist"
          />

          {/* Datalist-input eşlemesi ile inputa otomatik tanımlama desteği sunabiliriz. */}
          <datalist id="coinlist">
            {allCoin.map((item, key) => (
              <option key={key}>{item.name} </option>
            ))}
          </datalist>

          <button
            type="submit"
            className="bg-[#7927ff] px-5 py-2 font-semibold hover:opacity-90"
          >
            Search
          </button>
        </form>
      </div>

      {/* Coin List */}
      <div className="max-w-4xl mx-auto bg-[#141414] rounded-lg shadow-lg overflow-hidden">
        {/* Title */}
        <div className="grid grid-cols-3 md:grid-cols-[0.5fr_2fr_1fr_1fr] p-4 bg-[#222] font-semibold">
          <p>#</p>
          <p>Coins</p>
          <p className="text-center">Price</p>
          <p className="hidden md:block text-right">24H Change</p>
        </div>
        {/* Coins */}
        {displayCoin.map((item, key) => (
          <CoinItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
