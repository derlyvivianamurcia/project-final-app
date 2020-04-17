import React from "react";
import Footer from "../components/Footer";
import ParticleComponent from "../components/ParticleComponent";
import FiltroEmpleos from "../components/FiltroEmpleos";
import MainEmpleabilidad from "../components/MainEmpleabilidad";
import Header from "../components/Header";
import axios from "axios";


class Empleabilidad extends React.Component {
  state = {
    empleos: [],
  };
  componentDidMount() {
    this.traerEmpleosDeApi();
  }
  traerEmpleosDeApi() {
    axios.get("http://localhost:3004/empleos").then((respuesta) => {
      this.setState({empleos: respuesta.data,});
    });
  }
  handleChangeFiltroEmpleo = (e) => {
    this.setState({ selectSeleccionadoContrato: e.target.value })
    console.log(e)
  };
  render() {
    let resultadosfiltro = [];
    if (this.state.selectSeleccionadoContrato) {
      const contratoSeleccionada = this.state.selectSeleccionadoContrato;
      resultadosfiltro = this.state.empleos.filter(
        (empleo) => empleo.tipoContrato === contratoSeleccionada
      )
    } else {
      resultadosfiltro = this.state.empleos;
    }
    return (
      <div>
        <Header />
        <div className="particles-js">
          <ParticleComponent />
        </div>
        <FiltroEmpleos OnchangeFiltro={this.handleChangeFiltroEmpleo} />
        <MainEmpleabilidad empleosConsultados={resultadosfiltro} 
        />
        <Footer />
      </div>
    );
  }
}
export default Empleabilidad;
