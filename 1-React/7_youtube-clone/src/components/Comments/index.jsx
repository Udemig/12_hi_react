import { useEffect, useState } from "react";
import api from "../../utils/api";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";

const Comments = ({ videoId }) => {
  // Yorum State
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Yorumları API'dan çek
  useEffect(() => {
    api
      .get("/comments", { params: { id: videoId } })
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="my-6">
      {isLoading ? (
        <h1>Yükleniyor...</h1>
      ) : (
        <>
          <h2 className="text-xl font-bold">{comments.commentsCount} Yorum </h2>

          <input
            type="text"
            placeholder="Yorum ekleyiniz ..."
            className="w-full bg-transparent border-b border-[#3E403F] p-2  mb-5 "
          />

          {comments.data.map((i, key) => (
            <div
              className="flex gap-2 sm:gap-3 items-start px-1 py-3 sm:py-4"
              key={key}
            >
              <img
                src={i.authorThumbnail[0].url}
                className="size-8 rounded-full sm:size-10"
                alt="user-image"
              />
              <div>
                {/* Top */}
                <h5 className="flex gap-2 items-center">
                  <span className="font-bold">{i.authorText} </span>
                  <span className="text-gray-500 text-sm">
                    {i.publishedTimeText}
                  </span>
                </h5>
                {/* Comment */}
                <p className="whitespace-pre-wrap">{i.textDisplay} </p>

                {/* Like & Dislike */}
                <div className="flex items-center gap-5 mt-2">
                  {/* Like */}
                  <div className="flex items-center gap-1 hover:bg-gray-700 p-1 px-2 rounded cursor-pointer">
                    <AiFillLike />
                    <span>{i.likesCount} </span>
                  </div>
                  {/* Dislike */}
                  <div className="hover:bg-gray-700 p-1 px-2 rounded cursor-pointer">
                    <AiFillDislike />
                  </div>
                  {/* Answer */}
                  <span className="hover:bg-gray-700 p-1 px-2 rounded cursor-pointer">
                    yanıtla
                  </span>
                </div>

                {/* Reply Count */}

                {/* Cevap sayısı 0'dan büyükse renderla */}
                {i.replyCount > 0 && (
                  <div className="mt-2 flex w-fit items-center p-1 rounded-md gap-2 text-blue-500 hover:bg-[#3E403F] cursor-pointer">
                    <TiArrowSortedDown />
                    {i.replyCount} yanıt
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
