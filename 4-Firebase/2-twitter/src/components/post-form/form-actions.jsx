import { CiImageOn as Image } from "react-icons/ci";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Smile } from "react-icons/fa";
import Loader from "../loader";

const FormActions = ({ isLoading, onImageChange, fileRef }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-tw-blue text-xl flex gap-4">
          <label htmlFor="image" type="button" className="form-icon">
            <input ref={fileRef} name="image" id="image" type="file" className="hidden" onChange={onImageChange} />
            <Image />
          </label>
          <button type="button" className="form-icon">
            <Gif />
          </button>
          <button type="button" className="form-icon">
            <Smile />
          </button>
        </div>

        <button
          disabled={isLoading}
          className="bg-secondary font-bold px-5 py-[6px] rounded-full text-primary tracking-wide hover:brightness-75 min-w-[100px] transition cursor-pointer flex justify-center"
        >
          {isLoading ? <Loader /> : "Gönder"}
        </button>
      </div>
    </>
  );
};

export default FormActions;
