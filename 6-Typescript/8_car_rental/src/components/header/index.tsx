import { Link } from "react-router-dom";
import Button from "../button";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-full z-10">
      <div className="max-width flex-between padding-x padding-y">
        <Link to="/">
          <img src="/logo.png" alt="bmw logo" width={50} height={50} />
        </Link>

        <Button text="Kaydol" name="kaydol" />
      </div>
    </header>
  );
};

export default Header;
