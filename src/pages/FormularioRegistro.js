import React from "react";
import MainFormularioRegistro from "../components/MainFormularioRegistro";
import Footer from "../components/Footer";
import ParticleComponent from "../components/ParticleComponent";

const FormularioRegistro = () => {
  return (
    <>
     <div className="particles-js">
        <ParticleComponent /> 
      </div>
      <MainFormularioRegistro />
      <Footer />
    </>
  );
};

export default FormularioRegistro;