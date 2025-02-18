import millify from "millify";
import { useState } from "react";
import { dateFormatter } from "../../helpers";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
  // Video resmini belirleyecek state
  const [isHover, setIsHover] = useState(false);

  // Video tarihi için değerler

  let formattedTime = null;
  let time;

  // Api'dan gelen veri istediğimi formatta değildi bizde bunun istediğimiz formata sokmak için koşullu bir yapı kurduk
  if (data.publishedTimeText) {
    // "4 hours ago" veya "3 days ago" içinden sayıyı ve zamanı çekelim
    const timeMatch = data.publishedTimeText.match(
      /(\d+)\s(hour|minute|day)s?\sago/
    );

    time = dateFormatter(timeMatch);
  }

  // Eğer video üzerine hover olunduysa ve movingThumbnails varsa bunu yoksa veya hover olunmadıysa thumbnail i render et
  const thumbnail =
    isHover && data.movingThumbnails
      ? data.movingThumbnails[data.movingThumbnails.length - 1].url
      : data.thumbnails[data.thumbnails.length - 1].url;

  return (
    // Video kart üzerine hover olunma durumuna bağlı olarak isHover state'ini güncelle
    <Link
      to={`/watch?v=${data.videoId}`}
      className="cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Resim Alanı */}
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={thumbnail}
          alt="video-image"
        />
      </div>

      {/* Alt Detay Alanı */}
      <div className="mt-4 flex gap-4">
        <img
          src={data.author.avatar[0].url}
          className="size-14 rounded-full"
          alt="chanel-pic"
        />
        <div>
          <h4 className="font-bold line-clamp-2">{data.title} </h4>
          <p>{data.author.title}</p>

          <div className="flex gap-3 items-center mt-2">
            {data.stats.views && (
              <p className="fw-bold">
                <span>{millify(data.stats.views)} </span>
                <span className="pe-3 ">Görüntülenme</span>*
              </p>
            )}

            {data.isLiveNow ? (
              <p className="bg-red-500 py-0.5 px-2 rounded-lg">Canlı</p>
            ) : (
              <p className="">
                <span>{time}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
