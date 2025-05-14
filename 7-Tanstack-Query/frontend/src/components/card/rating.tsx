import type { FC } from "react";

interface Props {
  rating: number;
  expand?: boolean;
}

const Rating: FC<Props> = ({ rating, expand = false }) => {
  // renk belirle
  const color: string =
    rating >= 4.7
      ? "bg-blue-500"
      : rating >= 4
      ? "bg-green-500"
      : rating >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  // metin belirle
  const text =
    rating >= 4.7
      ? "Çok İyi"
      : rating >= 4
      ? "İyi"
      : rating >= 3
      ? "Orta"
      : "Kötü";

  return (
    <div>
      <span className={`${color} text-white p-2 rounded-lg font-bold`}>
        {Number(rating).toFixed(1)}
      </span>

      {expand && <span className="font-semibold text-lg ms-2">{text}</span>}
    </div>
  );
};

export default Rating;
