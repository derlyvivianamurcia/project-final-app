import React from "react";

class Empleos extends React.Component {
  handleClick = (event) => {
    const empleo = event.target.id;
    const usuarioAutenticado = JSON.parse(localStorage.getItem("access_token"));
    // lograr imprimir propiedades, ejemplo -> empleo.nameEmpleo
    if (usuarioAutenticado){
      window.confirm("Su postulación fue exitosa");
      console.log(usuarioAutenticado + empleo);
    }else {
      window.confirm("Para aplicar a la vacante debe registrarse");
    }
    
  };
  render() {
    const datos = this.props.listaEmpleos;
    return (
      <React.Fragment>
        {datos.map((item) => {
          return (
            <div className="card mt-4" key={item.id}>
              <h5 className="card-header">
                <strong>Vacante:</strong> {item.nameEmpleo}
              </h5>
              <div className="card-body">
                <p>
                  <strong>Empresa:</strong> {item.nombreEmpresa}
                </p>
                <p>
                  <strong>Ubicación:</strong> {item.ubicacionEmpleo}
                </p>
                <p className="text-justify">
                  <strong>Descripción:</strong> {item.descripcionEmpleo}
                </p>
                <p>
                  <strong>Tipo de contrato:</strong> {item.tipoContrato}
                </p>
                <p>
                  <strong>Salario:</strong> ${item.salario}
                </p>
                <button
                  onClick={this.handleClick}
                  id={item}
                  className="btn btn-orange"
                >
                  <strong>Postularme</strong>
                </button>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Empleos;
