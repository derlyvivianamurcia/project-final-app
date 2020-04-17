import React from "react";
import Iframe from "react-iframe";

function InformacionCurso(props) {
  const datos = props.EjemploDAlgoQueMando;
  return datos.map((DatoCurso) => {
    return (
      <div key={DatoCurso.id} className="col-sm-4 col-md-4 col-lg-4">
        <div className="card" style={{ width: "18rem", height: "430px" }}>
          <img
            src={DatoCurso.imagen}
            className="card-img-top"
            style={{ width: "18rem", height: "180px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{DatoCurso.nombreCurso}</h5>
            <p className="card-text">
              Creado por
              <span className="text-primary"> {DatoCurso.autor}</span>
            </p>
            <p className="card-text">
              Duración del curso
              <span className="font-weight-bold"> {DatoCurso.duracion}</span>
            </p>
            <a href="#" className="btn btn-orange font-weight-bold">
              Comenzar
            </a>
          </div>
        </div>
        <br />
      </div>
    );
  });
}

export default InformacionCurso;
