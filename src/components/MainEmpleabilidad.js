import React, { Component } from "react";
import Empleos from "./empleos";
import axios from 'axios'

class MainEmpleabilidad extends React.Component {
  constructor(props){
    super(props)
    this.state={
      empleos:[],
    }
  }
   

  componentDidMount(){
this.traerEmpleosDeApi()


  }
  traerEmpleosDeApi() {
    axios.get("http://localhost:3001/empleos")
    .then((respuesta)=>{
    console.log(respuesta.data)
    this.setState({
      empleos:respuesta.data
    })
    })
  }
 
  render() {
    return (
      <>
        <div className="container marginTop">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-3">
              <h5>Mis postulaciones</h5>
            </div>
            <div className="col-md-3">
              <button className="btn btn-info btn-lg">
                Ingrese su hoja de vida
              </button>
            </div>
          </div>
          <div className="row marginTop">
            <div className="col-md-12 text-center">
              <h2>Empleos</h2>
              <p>Encuentra más de 20 millones de empleos</p>
            </div>
          </div>
          <div className="row">
            <Empleos listaEmpleos={this.state.empleos} />
          </div>
        </div>
      </>
    );
  }
}

export default MainEmpleabilidad;
