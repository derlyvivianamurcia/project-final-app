import React from "react";

function Empleos(props) {
  const datos = props.listaEmpleos;
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
                <strong>Empresa:</strong> {item.ubicacionEmpleo}
              </p>
              <p>
                <strong>Ubicación:</strong> {item.ubicacionEmpleo}
              </p>
              <p>
                <strong>Descripción:</strong> {item.descripcionEmpleo}
              </p>
              <p>
                <strong>Tipo de contrato:</strong> {item.tipoContrato}
              </p>
              <p>
                <strong>Salario:</strong> ${item.salario}
              </p>
              <a href="#" className="btn btn-orange">
                Postularme
              </a>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
export default Empleos;