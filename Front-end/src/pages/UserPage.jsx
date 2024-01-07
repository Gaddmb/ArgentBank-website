import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/main.css";
import accountsData from "../data/accounts.json";

const UserPage = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  // Effet secondaire pour la redirection si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!user.isConnected) {
      navigate("/signIn");
    }
  }, [user.isConnected, navigate]);

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
        {accountsData.map((account, index) => (
          <section key={index} className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">
                {account.description}
              </p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default UserPage;
