// AdminPage.jsx
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editUser } from "../Redux/Actions/user.action";
import EditUserInfoForm from "../components/Admin/EditUserInfoForm";
import AccountSection from "../components/Admin/AccountSection";
import "../css/main.css";

const AdminPage = () => {
  const user = useSelector((store) => store.user); // pour extraire les données du store
  const dispatch = useDispatch(); // pour obtenir la fonction dispatch de redux rappelle ca em permet d'envoyer des action dasn le store
  const navigate = useNavigate(); // pour obtenir la fonction de navigation de react

  // etat local pour stocker les données du formulaire
  const [data, setData] = useState({
    userName: user.userName,
  });

  // pour rediriger si l'utioisateur n'est pas connecté
  useEffect(() => {
    if (!user.isConnected) {
      navigate("");
    }
  }, [user.isConnected, navigate]);

  // qui va mettre a jour l'etat
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
        <EditUserInfoForm
          data={data}
          handleChange={handleChange}
          handleForm={handleForm}
          user={user}
          navigate={navigate}
        />

        <h2 className="sr-only">Accounts</h2>
        <AccountSection />
        <AccountSection />
        <AccountSection />
      </main>
    </>
  );
};

export default AdminPage;
