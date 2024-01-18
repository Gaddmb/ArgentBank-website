// j'importe tout mes modules react redux etc et les action redux
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editUser, login } from "../Redux/Actions/user.action";
import "../css/main.css";

// pour gere l'etat data= = objet
const SignInPage = () => {
  const [data, setData] = useState({
    email: "tony@stark.com",
    password: "password123",
  });
  const [error, setError] = useState(false);

  // Fonction qui va mettre a jour l'etat
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch(); // pour obtenir la fonction dispatch de Redux rappelle ca me permet d'envoyer des action dans le store comme ca je declanche la mise a jour
  const navigate = useNavigate(); //  pour obtenir la fonction de navigation de react-router-dom.

  //  j'envoie une requête POST pour la connexion utilisateur
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // je Récupère le token depuis la réponse
    const token = await response.json();

    // Si la connexion est réussie, dispatch l'action login
    if (response.ok) {
      dispatch(login(token.body));
      // ici j'envoie une autre requête POST pour obtenir le profil utilisateur
      const userResponse = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.body.token}`,
          },
        }
      );

      // je Récupère le token depuis la réponse
      const userData = await userResponse.json();
      console.log(userData);

      // Si la connexion est réussie, dispatch l'action login
      if (response.ok) {
        dispatch(editUser(userData.body));
        navigate("/user");
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <main className="main bg-dark">
        <section className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {error && <p>Email ou mot de passe incorrect</p>}
              <button type="submit" className="sign-in-button">
                Sign In
              </button>
            </form>
          </section>
        </section>
      </main>
    </>
  );
};

export default SignInPage;
