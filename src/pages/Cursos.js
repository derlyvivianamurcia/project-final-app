import React from "react";
import Header from "../components/Header";
import ParticleComponent from "../components/ParticleComponent";
import FiltroCursos from "../components/FiltroCursos";
import ContenidoCursos from "../components/ContenidoCursos";
import Footer from "../components/Footer";

class Cursos extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="particles-js">
          <ParticleComponent />
        </div>
        <FiltroCursos />
        <ContenidoCursos />
        <Footer />
      </div>
    );
  }
}

export default Cursos;
