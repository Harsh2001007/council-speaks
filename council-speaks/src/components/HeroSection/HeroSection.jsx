import React from "react";
import "../../components/HeroSection/heroSection.css";
import counsellingImg from "../../images/counselling.jpg";

function HeroSection() {
  return (
    <>
      <div className="heroMainContainer">
        <div className="heroContainer">
          <div className="leftHero">
            <h1>
              Your Journey to Wellness <br /> <span>Starts Here.</span>
            </h1>
            <p>
              "Offering expert guidance for behavior challenges, marriage and
              relationship issues, health and lifestyle concerns, and education
              counseling. We're here to support you through every step of your
              personal journey."
            </p>
            <div className="exp-more-div">
              <button className="exp-more">Explore More</button>
            </div>
          </div>
          <div className="rightHero">
            <img
              src={counsellingImg}
              alt="counselling image"
              className="hero-counselling"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
