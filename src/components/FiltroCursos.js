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
          <div className="col-3 text-right">
            <label>
              <strong>Selecciona una categoría</strong>
            </label>
          </div>
          <div className="col-6">
            <form>
              <div className="form-group">
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
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default FiltroCursos;
