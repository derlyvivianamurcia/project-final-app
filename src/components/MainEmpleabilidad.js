import React, { Component } from "react";
import Empleos from "./empleos";

class MainEmpleabilidad extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Empleos listaEmpleos={this.props.empleosConsultados} />
        </div>
      </div>
    );
  }
}
export default MainEmpleabilidad;