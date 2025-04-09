const Total = ({ cart }) => {
  // Sepetteki toplam ürün miktarını hesapla
  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  // Sepetteki toplam fiyatı hesapla
  const totalPrice = cart.reduce((total, i) => total + i.amount * i.price, 0);

  return (
    <div className="border p-5 rounded-md h-fit">
      <h2 className="font-semibold text-xl">Sipariş Detayları</h2>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Ürün Adeti:</span>
        <span className="text-lg text-red-500">{totalAmount} </span>
      </p>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Toplam Fiyat:</span>
        <span className="text-lg text-red-500">{totalPrice.toFixed(2)} </span>
      </p>

      <button className="bg-red-500 p-1 px-3 rounded-md text-white transition hover:bg-red-400">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Total;
