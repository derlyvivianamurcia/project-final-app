import React from "react";

function InformacionCurso(props) {
  const cursos = props.EjemploDAlgoQueMando;
  return cursos.map((curso) => {
    return (
      <div key={curso.id} className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 mt-3">
        <div className="card" style={{ width: "18rem", height: "433px" }}>
          <img
            src={curso.imagen}
            className="card-img-top"
            style={{ width: "18rem", height: "180px" }}
            alt="logo"
          />
          <div className="card-body">
            <h5 className="card-title">{curso.nombreCurso}</h5>
            <p className="card-text">
              Autor:
              <span className="text-primary"> {curso.autor}</span>
            </p>
            <p className="card-text">
              Duración:
              <span className="font-weight-bold"> {curso.duracion}</span>
            </p>
            <a
              href={`cursos/${curso.id}`}
              className="btn btn-orange font-weight-bold"
            >
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
