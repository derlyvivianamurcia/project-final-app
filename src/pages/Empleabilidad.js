import React from "react";
import Footer from "../components/Footer";
import ParticleComponent from "../components/ParticleComponent";
import FiltroEmpleos from "../components/FiltroEmpleos";
import MainEmpleabilidad from "../components/MainEmpleabilidad";
import Header from "../components/Header";

const Empleabilidad = () => {
  return (
    <>
      <Header />
      <div className="particles-js">
        <ParticleComponent /> 
      </div>
      <FiltroEmpleos />
      <MainEmpleabilidad />
      <Footer />
    </>
  );
};

export default Empleabilidad;
