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
            <select className="form-control">
              <option>Tipo de Contrato..</option>
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
              <select className="form-control" >
                <option value="ContratoFijo">Contrato Indefinido</option>
                <option value="ContratoIndefinido">Contrato Fijo</option>
                <option value="ContratoAprendizaje">Contrato de Aprendizaje</option>
                <option value="ContratoHoras">Contrato por Horas</option>               
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