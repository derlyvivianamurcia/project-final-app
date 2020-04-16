import React from "react";
import AprenderReactJS from "../images/cursos/AprenderReactJS.PNG";

function InformacionCurso(props) {
  const datos = props.EjemploDAlgoQueMando;
  return datos.map((DatoCurso) => {
    return (
      <div key={DatoCurso.id} className="col-sm-4 col-md-4 col-lg-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={AprenderReactJS} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{DatoCurso.nombreCurso}</h5>
            <p className="card-text">
              Creado por
              <span className="text-primary"> {DatoCurso.profesor}</span>
            </p>
            <p className="card-text">
              Duración del curso
              <span className="font-weight-bold"> {DatoCurso.duracion}</span>
            </p>
            <a href="#" className="btn btn-primary">
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
