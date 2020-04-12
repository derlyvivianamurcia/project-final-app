import React from "react";

class FiltroCursos extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid filtroCursos">
        <div className="container">
          <form>
            <div className="form-row">
              <div className="form-group col-md-2">
                <select className="form-control">
                  <option>Categorías</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <select className="form-control">
                  <option>Idioma</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-control busquedaCursos inputCursos"
                  type="text"
                  placeholder="Buscar curso"
                ></input>
              </div>
              <div className="form-group col-md-2">
                <button className="btn btn-primary ">Buscar Cursos</button>
              </div>
            </div>
          </form>
          <div className="row mensajeFiltroCursos">
            <div className="col-12">
              <label>Escuela de formación online</label>
            </div>
            <div className="col-12">
              <label>
                Construye tu propio futuro aprendiendo nuevas habilidades
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FiltroCursos;
