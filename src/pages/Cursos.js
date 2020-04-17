import React from "react";
import Header from "../components/Header";
import ParticleComponent from "../components/ParticleComponent";
import FiltroCursos from "../components/FiltroCursos";
import ContenidoCursos from "../components/ContenidoCursos";
import Footer from "../components/Footer";
import axios from "axios";

class Cursos extends React.Component {
  state = {
    cursos: [],
  };

  componentDidMount() {
    this.traerCursosDeApi();
  }

  traerCursosDeApi() {
    axios.get("http://localhost:3001/cursos").then((respuesta) => {
      this.setState({ cursos: respuesta.data });
    });
  }

  handleChangeFiltro = (e) => {
    /*     console.log("tamaño cursos originales " + this.state.cursos.length);
    console.log("tamaño cursos backups " + this.state.copiaCursos.length);
    const backup = this.state.copiaCursos;
    console.log("copia de cursos" + backup);
    this.setState({ cursos: backup });
    console.log(
      "tamaño cursos originales con backup" + this.state.cursos.length
    );
    let resultados = this.state.cursos.filter(
      (curso) => curso.categoria === e.target.value
    );
    this.setState({ cursos: resultados });
    console.log(
      "tamaño cursos originales con resultado" + this.state.cursos.length
    ); */
    this.setState({ selectSeleccionado: e.target.value });
  };

  render() {
    let resultados = [];
    if (this.state.selectSeleccionado) {
      const categoriaSeleccionada = this.state.selectSeleccionado;
      resultados = this.state.cursos.filter(
        (curso) => curso.categoria === categoriaSeleccionada
      );
    } else {
      resultados = this.state.cursos;
    }

    return (
      <div>
        <Header />
        <div className="particles-js">
          <ParticleComponent />
        </div>
        <FiltroCursos onChangeFiltro={this.handleChangeFiltro} />
        <ContenidoCursos cursosConsultados={resultados} />
        <Footer />
      </div>
    );
  }
}

export default Cursos;
