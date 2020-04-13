import React from "react";

class FiltroCursos extends React.Component {
  render() {
    return (
      <div className="btext">
        <div className="container">
          <form className="form-row">
            <div className="col-md-3 form-group">
              <select className="form-control">
                <option>Categorías</option>
              </select>
            </div>

            <div className="col-md-3 form-group">
              <select className="form-control">
                <option>Idioma</option>
              </select>
            </div>

            <div className="col-md-4 form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Buscar curso"
              ></input>
            </div>

            <div className="col-md-2 form-group">
              <button className="btn btn-primary">Buscar Cursos</button>
            </div>
          </form>

          <div className="row">
            <div className="col-12">
              <h3 className="text-white text-center">
                Escuela de formación online
              </h3>
            </div>

            <div className="col-12">
              <h3 className="text-white text-center">
                Construye tu propio futuro aprendiendo nuevas habilidades
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FiltroCursos;
