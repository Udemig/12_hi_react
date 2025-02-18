import { useSearchParams } from "react-router-dom";
import Sidebar from "../../components/SideBar";
import { useEffect } from "react";
import api from "../../utils/api";
import { useState } from "react";
import VideoCard from "../../components/VideoCard";

const Feed = () => {
  // State kurulumları
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Url'deki parametreye eriş
  const [params] = useSearchParams();
  const selectedCat = params.get("category");

  console.log(videos);

  // Api'a istek at
  useEffect(() => {
    // Api isteği atılacak url'i belirle
    const url = !selectedCat
      ? "/home"
      : selectedCat === "trending"
      ? "/v2/trending"
      : `/search?query=${selectedCat}`;

    setIsLoading(true);
    // Api'a istek at
    api
      .get(url)
      .then((res) => setVideos(res.data.contents))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCat]);
  return (
    <div className="flex">
      <Sidebar selectedCat={selectedCat} />
      <div className="videos">
        {isLoading ? (
          <h1>Yükleniyor</h1>
        ) : error ? (
          <h1>Hataaa</h1>
        ) : (
          videos?.map(
            (video, key) =>
              video.type === "video" && (
                <VideoCard key={key} data={video.video} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
