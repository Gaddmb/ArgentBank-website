import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { editUser } from "../Redux/Actions/user.action";
import "../css/main.css";

const AdminPage = () => {
  const user = useSelector((store) => store.user); // pour extraire les données du store
  const dispatch = useDispatch(); // pour obtenir la fonction dispatch de Redux rappelle ca me permet d'envoyer des action dans le store comme ca je declanche la mise a jour
  const navigate = useNavigate(); //  pour obtenir la fonction de navigation de react-router-dom.

  // État local pour stocker les données du formulaire
  const [data, setData] = useState({
    userName: user.userName,
  });

  // pour rediriger si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!user.isConnected) {
      navigate("");
    }
  }, [user.isConnected, navigate]);

  // Fonction qui va mettre a jour l'etat
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Fonction pour soumettre le formulaire j'effectue la requete avers API avec le nouveau nom
  const handleForm = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ userName: data.userName }),
    });
    // si c'est ok alors je demande a mettre a jours l'etat global grace a la fonction dispatch
    if (response.ok) {
      const responseData = await response.json();
      const updatedUsername = responseData.body;
      dispatch(editUser(updatedUsername));
      navigate("/user");
    }
  };

  return (
    <>
      <main className="main">
        <h1 className="labels">Edit User info</h1>
        <form className="form-admin">
          <div className="labels">
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              name="userName"
              value={data.userName}
              onChange={handleChange}
            />
            <div className="labels">
              <label htmlFor="firstname">First Name : </label>
              <input type="text" defaultValue={user.firstName} disabled />
            </div>
            <div className="labels">
              <label htmlFor="lastname">Last Name : </label>
              <input type="text" defaultValue={user.lastName} disabled />
            </div>
            <div className="button">
              <button className="edit-button" onClick={handleForm}>
                Save
              </button>
              {user.isLogged && (
                <NavLink to="/user">
                  <button className="edit-button">cancel</button>
                </NavLink>
              )}
            </div>
          </div>
        </form>

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
    </>
  );
};

export default AdminPage;
