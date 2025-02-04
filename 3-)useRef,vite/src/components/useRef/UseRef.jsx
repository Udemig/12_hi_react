import { useRef } from "react";
const Useref = () => {
  // useRef kullanırken
  // 1-) useRef'i import et
  // 2-) Bunun bir referansını al
  // 3-) Erişilmek istenen elemana alınan referansı ref={} kısmında ver

  // useRef ile bir referans al
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  console.log(inputRef);

  return (
    <div>
      <div className="d-flex  align-items-center justify-content-center gap-3">
        <button
          onClick={() => handleFocus()}
          className="btn btn-success text-nowrap"
        >
          Input'a Odaklan
        </button>

        {/* Erişilmek istenen elemanın ref={} değerine bu referansı ver */}
        <input
          type="text"
          ref={inputRef}
          className="form-control"
          placeholder="Birşeyler yazınız ..."
        />
      </div>
    </div>
  );
};

export default Useref;
