import React, { Component } from "react";
import Empleos from "./empleos";


class MainEmpleabilidad extends React.Component {
  render() {
    return (
        <div className="container marginTop">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-3">
              <button className="btn btn-orange font-weight-bold ">
                Mis postulaciones
              </button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-orange font-weight-bold">
                Ingrese su hoja de vida
              </button>
            </div>
          </div>
          <div className="row marginTop">
            <div className="col-md-12 text-center">
              <h2>Empleos</h2>
            </div>
          </div>
          <div className="row">
            <Empleos listaEmpleos={this.props.empleosConsultados} />
          </div>
        </div>
    );
  }
}

export default MainEmpleabilidad;
