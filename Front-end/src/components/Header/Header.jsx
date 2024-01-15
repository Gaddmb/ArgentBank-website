import { useSelector } from "react-redux";
import "../../components/Header/Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../Redux/Actions/user.action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const HeaderHome = () => {
  const user = useSelector((store) => store.user); // pour extraire les données du store
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {!user.isConnected ? (
          <NavLink to="/signIn" className="main-nav-item">
            Sign In
          </NavLink>
        ) : (
          <div>
            <p>{user.userName}</p>
            <button className="Button-logout" onClick={handleLogout}>
              logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderHome;
