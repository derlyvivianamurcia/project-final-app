import React from "react";
import Footer from "../components/Footer";
import ParticleComponent from "../components/ParticleComponent";
import FiltroEmpleos from "../components/FiltroEmpleos";
import MainEmpleabilidad from "../components/MainEmpleabilidad";
import Header from "../components/Header";
import axios from "axios";

class Empleos extends React.Component {
  state = {
    empleos: [],
    empleosBackup: [],
  };

  componentDidMount() {
    this.traerEmpleosDeApi();
  }

  traerEmpleosDeApi() {
    axios.get("https://api-eduskill.now.sh/empleos").then((respuesta) => {
      this.setState({ empleos: respuesta.data, empleosBackup: respuesta.data });
    });
  }

  handleChangeFiltroInput = (e) => {
    const valorParaBuscar = e.target.value;
    if (valorParaBuscar !== "") {
      this.funcionInput(e.target.value);
    } else {
      this.traerEmpleosDeApi();
    }
  };

  funcionInput(buscar) {
    const resultadosInput = this.state.empleosBackup.filter((empleo) => {
      return (
        empleo.nameEmpleo.toLowerCase().indexOf(buscar.toLowerCase()) !== -1
      );
    });
    this.setState({ empleos: resultadosInput });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="particles-js">
          <ParticleComponent />
        </div>
        <FiltroEmpleos OnchangeFiltro={this.handleChangeFiltroInput} />
        <MainEmpleabilidad empleosConsultados={this.state.empleos} />
        <Footer />
      </div>
    );
  }
}

export default Empleos;
