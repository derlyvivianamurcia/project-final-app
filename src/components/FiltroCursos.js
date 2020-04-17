import React from "react";

class FiltroCursos extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <br />
            <h3 className="text-center">Escuela de formación online</h3>
          </div>

          <div className="col-12">
            <h3 className=" text-center">
              Construye tu propio futuro aprendiendo nuevas habilidades
            </h3>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <form className="form-row">
              <div className="col-md-4 form-group">
                <select className="form-control">
                  <option>Categorías</option>
                </select>
              </div>

              <div className="col-md-6 form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Buscar curso"
                ></input>
              </div>

              <div className="col-md-2 form-group">
                <button className="btn btn-orange font-weight-bold">
                  Buscar Cursos
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FiltroCursos;
