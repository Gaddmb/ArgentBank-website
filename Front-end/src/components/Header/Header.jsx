import "../../components/Header/Header.css";
import argentBankLogo from "../../img/argentBankLogo.png";
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderHome = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/signIn" className="main-nav-item">
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default HeaderHome;
