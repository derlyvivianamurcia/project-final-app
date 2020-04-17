import React from "react";

function Empleos(props) {  
  const { listaEmpleos } = props;
  return (
    <>
      {listaEmpleos.map((item) => {
        return (
          <div className="card-deck" key={item.id}>
            <div className="card mt-2">
              <div className="row">
                <div className="col-2 justify-content-center align-items-center d-flex">
                  <img
                    src={item.imgEmpleo}
                    alt="..."
                  ></img>
                </div>
                <div className="col-10">             
                    <h5 className="card-title">{item.nameEmpleo}</h5>
                    <p>{item.ubicacionEmpleo}</p>
                    <p className="card-text">
                      <strong>Descripción: </strong>
                      {item.descripcionEmpleo}
                    </p>
                    <p>
                      <strong>Tipo empleo:</strong> {item.tipoEmpleo}{"  "}
                      <strong>Tipo de contrato:</strong>{item.tipoContrato}{"  "}
                      <strong>Salario:</strong>
                      {item.salario}
                    </p>
                </div>
                <div className="mx-auto ">
                <a href="#" className="btn mb-1 btn-secondary ">
                  Postularme
                </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </>
  );
}
export default Empleos;
