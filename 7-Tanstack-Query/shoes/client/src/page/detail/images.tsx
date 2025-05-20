import type { FC } from "react";

interface Props {
  images: string[];
}

const Images: FC<Props> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-[48px] h-fit">
      {images.map((image, key) => (
        <img key={key} src={"/" + image} alt="shoe" />
      ))}
    </div>
  );
};

export default Images;
