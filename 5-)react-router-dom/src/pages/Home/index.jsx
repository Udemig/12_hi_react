import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: 20 }}
          to="/detay/1"
        >
          1.ürünün detay sayfasına git
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: 20 }}
          to="/detay/2"
        >
          2.ürünün detay sayfasına git
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: 20 }}
          to="/detay/3"
        >
          3.ürünün detay sayfasına git
        </Link>
      </div>
    </div>
  );
}

export default Home;
