import type { FC } from "react";
import { FaHeart } from "react-icons/fa";
import DOMPurify from "dompurify";

interface Props {
  description: string;
}

const Foot: FC<Props> = ({ description }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="flex-1 footer-button">Sepete Ekle</button>
          <button className="footer-button">
            <FaHeart />
          </button>
        </div>

        <button className="bg-my-blue footer-button">Hemen Satın Al</button>
      </div>

      <div>
        <h2 className="font-semibold mt-8 mb-2 text-[24px] text-dark-grey">
          Bu ürün hakkında
        </h2>

        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></div>
      </div>
    </div>
  );
};

export default Foot;
