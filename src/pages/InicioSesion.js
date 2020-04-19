import React from "react";
import HeaderSimple from "../components/HeaderSimple";
import MainInicioSesion from "../components/MainInicioSesion";
import Footer from "../components/Footer";

class InicioSesion extends React.Component {
  render() {
    return (
      <div>
        <HeaderSimple />
        <MainInicioSesion />
        <Footer />
      </div>
    );
  }
}

export default InicioSesion;
