import React from "react";

const FeaturesSection = ({ features }) => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <img
            src={feature.icon}
            alt={feature.title + "Icon"}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
