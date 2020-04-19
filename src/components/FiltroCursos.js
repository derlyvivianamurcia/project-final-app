import React from "react";

class FiltroCursos extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row colorTextAzul text-center">
          <div className="col-12">
            <br />
            <h3>Escuela de formación online</h3>
          </div>

          <div className="col-12">
            <h3>Construye tu propio futuro aprendiendo nuevas habilidades</h3>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-sm-3 col-form-label text-right colorTextAzul">
            <label>
              <strong>Selecciona una categoría</strong>
            </label>
          </div>
          <div className="col-5">
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
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default FiltroCursos;
