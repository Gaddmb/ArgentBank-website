import React from "react";
import "../css/main.css";
import homePageData from "../data/homePage.json";

const HomePage = () => {
  const { heroContent, features } = homePageData;

  return (
    <>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            {heroContent.map((content, index) => (
              <p key={index} className="subtitle">
                {content}
              </p>
            ))}
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <img
                src={feature.icon}
                alt={feature.title + " Icon"}
                className="feature-icon"
              />
              <h3 className="feature-item-title">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default HomePage;
