import React from "react";
import "../ServicesSection/servicesSection.css";

function ServiceCard({ imgName, cardTitle }) {
  return (
    <div className="cardContainer">
      <img src={imgName} alt="" className="service-image" />
      <p className="cardTitle">{cardTitle}</p>
    </div>
  );
}

export default ServiceCard;
