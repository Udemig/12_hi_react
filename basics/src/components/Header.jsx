import "../styles/Header.css";
function Header() {
  const giveAlert = () => {
    alert("Dikkat!!!");
  };
  const courseName = "Udemig Akademi";
  return (
    <header>
      <h1 className="logo">{courseName}</h1>

      <nav style={{ display: "flex", alignItems: "center" }}>
        <li>
          <a href="https://udemig.com/">Ana Sayfa</a>
        </li>
        <li>
          <a href="https://udemig.com/">Hakkımızda</a>
        </li>
        <li>
          <a href="https://udemig.com/">İletişim</a>
        </li>
      </nav>

      <button className="btn btn-dark" onClick={() => giveAlert()}>
        Uyarı Ver
      </button>
    </header>
  );
}

export default Header;
