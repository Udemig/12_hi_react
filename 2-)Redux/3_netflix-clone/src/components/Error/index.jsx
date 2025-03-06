const Error = ({ info }) => {
  return (
    <div className="text-center my-20">
      <p className="mb-10">Üzgünüz bir hata oluştu</p>

      <p className="font-bold p-2">{info} </p>

      <p className="mt-5">Daha Sonra Tekrar deneyiniz</p>
    </div>
  );
};

export default Error;
