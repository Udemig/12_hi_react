import { useState } from "react";
const State = ({ title, desc }) => {
  // * Bir bileşeni dinamik hale getirmek için props kullanılır.Props kullanılırken ilk olarak bu propsu bileşene geçmeli sonrasında ise bunu alıp kullanmalıyız.Fakat dizi,obje gibi değerlerin geçilmesi durumunda içi içe yazım gerektiğinden bunu yazarken hem zorlanır hemde hata yapabiliriz.Bunu önlemek  için obje dağıtma yöntemi kullanılır.Bu yönetmle bileşen geçilen propslar daha kolay bir şekilde yönetilir.
  // * Bir state'in oluşturulması noktasında

  // 1-) useState'i import et
  // 2-) useState ile bir state kurulumu yap.
  // i-) useState() i bir diziye atarız.Bu dizi bizden iki adet değer talep eder.Birincisi state'in adı ikincisi state güncelleyecek fonksiyon
  // ii-) State'in başlangıç değerini ise useState() kısımındaki () içerisinde belirtiriz.
  // 3-) State'i bileşen içerisinde kullan

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container my-4">
      <div className="bg-white text-dark">
        <div className="d-flex align-items-center justify-content-between px-2 py-3  border-bottom border-2 pb-2">
          <h1>{title}</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-dark btn-sm"
          >
            <span className="fs-1">{isOpen ? "X" : "+"}</span>
          </button>
        </div>
        {isOpen && (
          <div className="p-3">
            <p className="lead">{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default State;
