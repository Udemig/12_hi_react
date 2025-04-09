import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <header>
      {/* Logo */}
      <h2>İş Takip</h2>

      {/* Navigation */}

      <nav>
        <NavLink to="/"> İş Listesi</NavLink>
        <NavLink to="/create"> İş Ekle</NavLink>
      </nav>
    </header>
  );
};

export default Header;
