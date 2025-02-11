function Home() {
  return (
    <div className="container my-5 d-flex flex-column align-items-center gap-5 justify-content-around">
      <h1 className="mt-5">Hoş Geldiniz</h1>

      <img src="/welcome.webp" className="img-fluid rounded image" alt="" />

      <p className="fw-bold">
        Ürünler Sayfasında Yeni Çıkan Bütün Kitaplara Ulaşabilirisniz
      </p>
    </div>
  );
}

export default Home;
