import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import ServicesSection from "./components/ServicesSection/ServicesSection.jsx";
import ReviewSection from "./components/ReviewSection/ReviewSection.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ReviewSection />
      <Footer />
    </>
  );
}

export default App;
