import React from "react";
import Header from "../components/Header";
import "../Style/Cursos.css";
import Footer from "../components/Footer";
import FiltroCursos from "../components/FiltroCursos";
import ContenidoCursos from "../components/ContenidoCursos";

class Cursos extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FiltroCursos />
        <ContenidoCursos />
        <Footer />
      </div>
    );
  }
}

export default Cursos;
