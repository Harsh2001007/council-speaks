import React from "react";
import "../ServicesSection/servicesSection.css";
import ServiceCard from "./ServiceCard";
import careerImg from "../../images/career.jpg";
import relationImg from "../../images/relationship.jpg";
import behaviourImg from "../../images/behaviour.jpg";
import healthImg from "../../images/health.jpg";

function ServicesSection() {
  return (
    <>
      <div className="servicesMainContainer" id="services-scroll">
        <div className="servicesContainer">
          <div className="services-top">
            <h1>Our Services</h1>
          </div>
          <div className="services-bottom">
            <ServiceCard imgName={careerImg} cardTitle={"Career Counselling"} />
            <ServiceCard
              imgName={relationImg}
              cardTitle={"Relationship Counselling"}
            />
            <ServiceCard
              imgName={behaviourImg}
              cardTitle={"Behavioral Counselling"}
            />
            <ServiceCard
              imgName={healthImg}
              cardTitle={"Health and Lifestyle Counselling"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesSection;
