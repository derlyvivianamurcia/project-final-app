import React from "react";
import MainInicioSesion from "../components/MainInicioSesion";
import Header from "../components/Header";
import Footer from "../components/Footer";

class InicioSesion extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainInicioSesion />
        <Footer />
      </div>
    );
  }
}

export default InicioSesion;
