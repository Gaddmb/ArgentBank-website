// HomePage.jsx
import React from "react";
import "../css/main.css";
import homePageData from "../data/homePage.json";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";

const HomePage = () => {
  const { heroContent, features } = homePageData;

  return (
    <>
      <main>
        <HeroSection heroContent={heroContent} />
        <FeaturesSection features={features} />
      </main>
    </>
  );
};

export default HomePage;
