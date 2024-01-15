import React from "react";

const HeroSection = ({ heroContent }) => {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {heroContent.map((content, index) => (
          <p key={index} className="subtitle">
            {content}
          </p>
        ))}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default HeroSection;
