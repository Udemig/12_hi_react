import { ICar } from "../../types";
import Images from "./images";

type Props = {
  car: ICar;
  isOpen: boolean;
  close: () => void;
};

const Modal = ({ car, close, isOpen }: Props) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] grid place-items-center z-20">
        <div className="bg-white p-6 relative max-w-xl max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto min-w-sm min-h-[70vh]">
          <button onClick={close} className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full">
            <img src="/close.svg" />
          </button>

          {/* Fotoğraflar */}
          <Images car={car} />

          {/* Bilgiler */}
          <div>todo: bilgiler</div>
        </div>
      </div>
    )
  );
};

export default Modal;
