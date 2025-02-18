import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import { useState } from "react";
import ChannelInfo from "../../components/ChannelInfo";

const Detail = () => {
  // React Router Dom içerisinden useSearchParams ı import et ve kurulumunu yap
  const [searchParams] = useSearchParams();

  // Video State

  const [video, setVideo] = useState(null);

  // Url'den v parametresinin karşılığını al
  const id = searchParams.get("v");

  console.log(video?.author.channelId);

  useEffect(() => {
    api.get(`/video/details/?id=${id}`).then((res) => setVideo(res.data));
  }, []);

  return (
    <div className="detail-page h-screen overflow-auto">
      <div className="page-content">
        {/* Video İçeriği */}
        <div>
          {/* Video */}
          <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height={"100%"}
              width={"100%"}
              controls
              // playing={true}
            />
          </div>

          {/* Info */}

          <div>
            {/* Title */}
            <h1 className="my-3 text-xl font-bold line-clamp-2">
              {video?.title}
            </h1>
            {/* Chanel */}
            <ChannelInfo id={video?.author.channelId} />
          </div>
        </div>

        {/* Önerilen Videolar  */}
        <div className="bg-yellow-300">
          <h1>Önerilen Videolar</h1>
        </div>
      </div>
    </div>
  );
};

export default Detail;
