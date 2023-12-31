import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage.jsx";

// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
