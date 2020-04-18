import React from "react";

class FiltroEmpleos extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-4 mb-4">
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

          <div className="col-md-6"></div>

          <div className="col-12 mt-4">
            <h3 className="text-center">Encuentra tu siguiente empleo</h3>
          </div>
        </div>
        <form className="form-row">
          <div className="col-md-4 form-group">
            <select
              className="form-control"
              onChange={this.props.OnchangeFiltro}
            >
              <option>Tipo de Contrato..</option>
              <option value="Indefinido">Contrato Indefinido</option>
              <option value="Fijo">Contrato Fijo</option>
              <option value="Aprendizaje">Contrato de Aprendizaje</option>
              <option value="Horas">Contrato por Horas</option>
            </select>
          </div>
          <div className="col-md-6 form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Puesto deseado"
            ></input>
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