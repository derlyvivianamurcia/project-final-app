import React from "react";

class FiltroEmpleos extends React.Component {
  IrAEditar() {
    window.location = "/editarHojaDeVida";
  }

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
            <button
              onClick={() => this.IrAEditar()}
              className="btn btn-orange font-weight-bold"
            >
              Ver su hoja de vida
            </button>
          </div>

          <div className="col-md-6"></div>

          <div className="col-12 mt-4">
            <h3 className="text-center">Encuentra tu siguiente empleo</h3>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label>
              <strong>Buscar vacante</strong>
            </label>
            <input
              onChange={this.props.OnchangeFiltro}
              className="form-control"
              type="text"
              placeholder="Puesto deseado"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FiltroEmpleos;
