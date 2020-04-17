import React from "react";

function Empleos(props) {
  const { Empleos } = props;
  return (
    <>
      {Empleos.map((item, index) => {
        return (
          <div className="col-lg-3" key={`ItemsEmpleos-item-${index}`}>
            <div class="card" key={`ItemsEmpleos-item-${index}`}>
              <img src={item.imgEmpleo} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{item.nameEmpleo}</h5>
                <p>{item.ubicacionEmpleo}</p>
                <p class="card-text">
                  <strong>Descripción: </strong>
                  {item.descripcionEmpleo}
                </p>
                <p>
                  <strong>Tipo empleo:</strong> {item.tipoEmpleo}{" "}
                </p>
                <a href="#" class="btn btn-orange font-weight-bold">
                  VER EMPLEO
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Empleos;
