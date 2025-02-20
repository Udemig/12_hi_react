import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import { useState } from "react";
import VideoCard from "../../components/VideoCard";
import ErrorComponent from "../../components/Error";
import { BasicLoader } from "../../components/Loader";

const Results = () => {
  // Api kendisinden istenen tüm verileri tek seferde vermez.Bunun sebebi çok fazla verinin tek seferde işlenmesinin serverı yoracak olmasıdır.Tek seferde  verileri vermediğinden bunu pagination [sayfalama] ile yapar.Bir sonraki sayfada bulunan verileri almak içinse bize bir token verir.Bu token'ı bir sonraki istekte apia verirsek bizim için sıradaki sayfanın verilerini getircektir.Bizde bu projedeki arama kısmında bu özelliği geliştirdik.

  // Stateler
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [page, setPage] = useState(1);

  // useSearchParams kurulum
  const [searchParams] = useSearchParams();

  // url'deki search_query parametresine eriş
  const query = searchParams.get("search_query");

  // Api'a gönderilecek parametreleri hazırla

  const params = {
    query,
    token: page > 1 ? token : null,
  };
  // Url'den erişilen arama parametresi ile api'a istek at
  useEffect(() => {
    api
      .get("/search", { params })
      .then((res) => {
        // Api'dan gelen verilerle statei güncelle
        setData((prev) => [...prev, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  return (
    <div className="p-4 sm:p-6 md:p-10 h-[93vh] overflow-y-auto">
      {error ? (
        <ErrorComponent />
      ) : isLoading ? (
        <BasicLoader />
      ) : (
        <>
          <h2 className="mb-5 text-xl">
            <span className="font-bold">Javascript</span> için sonuçlar
          </h2>
          <div className="wrapper flex flex-col gap-5 justify-center">
            {error ? (
              <h1>Hataaaa</h1>
            ) : (
              data.map(
                (i, key) =>
                  i.type === "video" && <VideoCard key={key} video={i} isRow />
              )
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setPage(page + 1)}
              className="bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition"
            >
              Daha Fazla
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
