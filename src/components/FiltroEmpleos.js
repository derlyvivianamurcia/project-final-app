import React from "react";
import Swal from "sweetalert2";
class FiltroEmpleos extends React.Component {
  IrAEditar() {
    window.location = "/editarHojaDeVida";
  }

  Postularme() {
    console.log("ir a pagina de mis postulaciones");
  }
  _Alerta() {
    Swal.fire(
      "Para poder ingresar debe obtener un plan premium!😃",
      "Has clic en el botón",
      "success"
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4 mb-4">
          <div className="col-md-3 mt-2">
            <button
              onClick={() => this.Postularme()}
              onClick={this._Alerta} 
              className="btn btn-orange font-weight-bold "
            >
              <i className="fas fa-list-ul"></i> Mis postulaciones
            </button>
          </div>

          <div className="col-md-3 mt-2">
            <button
              onClick={() => this.IrAEditar()}
              className="btn btn-orange font-weight-bold"
            >
              <i className="fas fa-user-tie"></i> Ver hoja de vida
            </button>
          </div>

          <div className="col-md-6"></div>

          <div className="col-12">
            <h3 className="text-center colorTextAzul marginTop">
              Encuentra tu siguiente empleo
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-sm-3 col-form-label text-right colorTextAzul">
            <label>
              <strong>Buscar vacante</strong>
            </label>
          </div>
          <div className="col-5">
            <form>
              <div className="form-group">
                <input
                  onChange={this.props.OnchangeFiltro}
                  className="form-control"
                  type="text"
                  placeholder="Puesto deseado"
                />
              </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default FiltroEmpleos;
