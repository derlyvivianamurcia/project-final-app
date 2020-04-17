import React from "react";

class FiltroEmpleos extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row marginTop">
          <div className="col-12">
            <h3 className="text-center">Encuentra tu siguiente empleo</h3>
          </div>
        </div>
        <form className="form-row">
          <div className="col-md-3 form-group">
            <select 
            className="form-control"
            onChange={this.props.OnchangeFiltro}>
              <option>Tipo de Contrato..</option>
              <option value="Indefinido">Contrato Indefinido</option>
                <option value="Fijo">Contrato Fijo</option>
                <option value="Aprendizaje">Contrato de Aprendizaje</option>
                <option value="Horas">Contrato por Horas</option> 
            </select>
          </div>
          <div className="col-md-4 form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Puesto deseado"
            ></input>
          </div>
            <div className="col-md-3 form-group">
              <select className="form-control">
              <option>Municipio...</option>
                <option value="Medellin">Medellín</option>
                <option value="Sabaneta">Sabaneta</option>
                <option value="Bello">Bello</option>
                <option value="Envigado">Envigado</option>  
                <option value="Itagui">Itagui</option>
                <option value="Rionegro">Rionegro</option>
                <option value="Jerico">Jerico</option>
                <option value="LaEstrella">La estrella</option>   
                <option value="Salgar">Salgar</option>        
              </select>
            </div>
          <div className="col-md-2 form-group">
            <button className="btn btn-orange font-weight-bold">
              Buscar Empleos
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FiltroEmpleos;