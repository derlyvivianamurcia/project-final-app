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
    axios.get("https://api-eduskill.now.sh/cursos").then((respuesta) => {
      this.setState({ cursos: respuesta.data });
    });
  }

  handleChangeFiltro = (e) => {
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
