import { memo } from "react";

const TextArea = () => {
  return (
    <textarea
      name="text"
      className="w-full bg-transparent mb-2 md:text-lg text-zinc-300 outline-none resize-y min-h-[40px] max-h-[300px]"
      placeholder="Neler Oluyor"
    />
  );
};

/*
 * text area component'ı hüç bir prop almadğı için kapsayıcı elemanın render olmasından olmasından dolayı gereksiz yere render oluyor
 * react.memo kullanarak componentın aldığı proplar değişmedikçe gereksiz yere render olmasının önüne geç
 */

export default memo(TextArea);
