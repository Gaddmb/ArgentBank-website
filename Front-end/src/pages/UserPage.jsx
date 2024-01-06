import React, { useEffect } from "react";
import "../css/main.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/main.css";


const UserPage = () => {

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  // Effet secondaire pour la redirection si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!user.isLogged) {
      navigate("");
    }
  }, [user.isLogged, navigate]);
  return (
    <div>
      <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.userName}
        </h1>
        <button className="edit-button">
          <NavLink to="/Admin">Edit Name</NavLink>
        </button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserPage;
