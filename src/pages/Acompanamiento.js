import React from "react";
import Header from "../components/Header";
import ParticleComponent from "../components/ParticleComponent";
import HeroAcompanamiento from "../components/HeroAcompanamiento";
import Heroseccioncitas from "../components/Heroseccioncitas";
import Footer from "../components/Footer";

const FormularioRegistro = () => {
  return (
    <>
      <Header />
      <div className="particles-js">
        <ParticleComponent />
        <HeroAcompanamiento />
      </div>
      <Heroseccioncitas />
      <Footer />
    </>
  );
};

export default FormularioRegistro;
