import React from "react";
import MainInicioSesion from "../components/MainInicioSesion";
import ParticleComponent from "../components/ParticleComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";

class InicioSesion extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="particles-js">
          <ParticleComponent />
        </div>
        <MainInicioSesion />
        <Footer />
      </div>
    );
  }
}

export default InicioSesion;
