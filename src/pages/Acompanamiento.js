import React from "react";
import Header from "../components/Header";
import ParticleComponent from "../components/ParticleComponent";
import Heroseccioncitas from "../components/Heroseccioncitas";
import Footer from "../components/Footer";

const FormularioRegistro = () => {
  return (
    <div>
      <Header />
      <div className="particles-js">
        <ParticleComponent />
      </div>
      <Heroseccioncitas />
      <Footer />
    </div>
  );
};

export default FormularioRegistro;
