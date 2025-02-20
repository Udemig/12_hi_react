import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart";

const Detail = () => {
  // Url'deki id'ye eriş
  const { coinId } = useParams();

  const { currency } = useContext(CoinContext);

  // States
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);

  // Coin'ın detaylarını getiren  fonksiyon
  const fetchCoinDetail = () => {
    api
      .get(`/coins/${coinId}`)
      .then((res) => setCoinData(res.data))
      .catch((err) => alert("Üzgünüz bir hata oluştu:", err));
  };

  // Coin fiyat verisini getiren fonksiyon
  const fetchCoinHistoricalData = () => {
    api
      .get(`/coins/${coinId}/market_chart`, {
        params: {
          vs_currency: currency.name,
          days: 10,
        },
      })
      .then((res) => setHistoricalData(res.data))
      .catch((err) => console.log(err));
  };

  console.log(coinData);

  useEffect(() => {
    fetchCoinDetail();
    fetchCoinHistoricalData();
  }, [coinId, currency]);

  return (
    <div className=" bg-[#0D0E2B] px-5 min-h-screen">
      {/* Image && Name */}
      <div className="flex flex-col items-center gap-5 my-24 mb-12 mx-auto">
        <img
          src={coinData?.image.large}
          className="max-w-[120px] mt-4 drop-shadow-lg"
          alt="coin-image"
        />
        <p className="text-4xl font-bold text-[#ffcc00]">
          {coinData?.name} ({coinData?.symbol.toUpperCase()})
        </p>
      </div>
      {/* Chart */}
      <div>
        <LineChart historicalData={historicalData} />
      </div>

      {/* Info */}
      <div></div>
    </div>
  );
};

export default Detail;
