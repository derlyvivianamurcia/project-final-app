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
                <select
                  onChange={this.props.onChangeFiltro}
                  className="form-control"
                >
                  <option value="">Todos</option>
                  <option value="Desarrollo">Desarrollo</option>
                  <option value="Negocios">Negocios</option>
                  <option value="Finanzas">Finanzas</option>
                  <option value="Informatica">Informática</option>
                  <option value="DesarrolloPersonal">
                    Desarrollo Personal
                  </option>
                  <option value="Diseño">Diseño</option>
                  <option value="EstiloVida">Estilo De Vida</option>
                  <option value="Idiomas">Idiomas</option>
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
