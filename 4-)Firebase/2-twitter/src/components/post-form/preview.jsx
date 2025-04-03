import { IoMdClose } from "react-icons/io";

const Preview = ({ isLoading, src, clearImage }) => {
  return (
    src && (
      <div className="relative mb-5">
        <button
          disabled={isLoading}
          type="button"
          onClick={clearImage}
          className="absolute top-3 end-3 p-3 bg-primary/90 rounded-full transition hover:bg-zinc-800 cursor-pointer text-xl disabled:bg-gray-600"
        >
          <IoMdClose />
        </button>

        <img src={src} className="rounded-md" alt="preview image" />
      </div>
    )
  );
};

export default Preview;
