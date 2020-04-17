import React, { Component } from "react";
import axios from "axios";

class MainFormularioRegistro extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      nombreUsuario: "",
      apellidoUsuario: "",
      password: "",
      passwordConfirmacion: "",
      tipoId:"",
      identificacionUser: "",
      celularUsuario: "",
      municipio: "",
      genero: "",
      direccion: "",
      titulo: "",
      descripcionPerfil: "",
      empresaExperiencia: "",
      rangoEmpresa:"",
      tiempoEmpresa: "",
      cargoEmpresa: "",
      idioma: "",
      nivelIdioma: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  handleClick = (e) => {
    console.log("boton presionado");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log("formulario enviado");
    console.log("email para buscar " + this.state.form.email);
    axios
      // .get(`http://localhost:3001/usuarios?email=${this.state.form.email}`)
      .then((respuesta) => {
        this.setState({ consultado: respuesta.data });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>

          <div className="col-6 border">
            <h5 className="text-center">Formulario de Registro</h5>

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="nombreUsuario"
                  className="form-control"
                  value={this.state.form.nombreUsuario}
                />
              </div>

              <div className="form-group">
                <label>Apellidos</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="apellidoUsuario"
                  className="form-control"
                  value={this.state.form.apellidoUsuario}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.state.form.email}
                />
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="password"
                  className="form-control"
                  value={this.state.form.password}
                />
              </div>

              <div className="form-group">
                <label>Confirmar contraseña</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="passwordConfirmacion"
                  className="form-control"
                  value={this.state.form.passwordConfirmacion}
                />
              </div>

              <div className="form-group">
                <label>Tipo de identificación</label>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  name="tipoId"
                  value={this.state.form.tipoId}>
                  <option>Cédula de ciudadanía</option>
                  <option>Cédula de extranjería</option>
                  <option>Tarjeta de identidad</option>
                  <option>Pasaporte</option>
                  <option>Número de Identificación</option>
                </select>
              </div>

              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  name="identificacionUser"
                  className="form-control"
                  type="text"
                  value={this.state.form.identificacionUser}
                />
              </div>

              <div className="form-group">
                <label>Teléfono celular</label>
                <input
                  onChange={this.handleChange}
                  name="celularUsuario"
                  type="tel"
                  class="form-control"
                  value={this.state.form.celularUsuario}
                />
              </div>

              <div className="form-group">
                <label>Municipio</label>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  name="municipio"
                  value={this.state.form.municipio}>
                  <option>Medellín</option>
                  <option>Bello</option>
                  <option>Envigado</option>
                  <option>El retiro</option>
                  <option>Itaguí</option>
                </select>
              </div>

              <h6>Genero</h6>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  onChange={this.handleChange}
                  type="radio"
                  name="genero1"
                  id="inlineRadio1"
                  value={this.state.form.genero1}
                />
                <label for="inlineRadio1" className="form-check-label">
                  Mujer
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  onChange={this.handleChange}
                  type="radio"
                  name="genero2"
                  id="inlineRadio2"
                  value={this.state.form.genero2}
                />
                <label for="inlineRadio2" className="form-check-label">
                  Hombre
                </label>
              </div>

              <div className="form-group">
                <br />
                <label>Dirección</label>
                <input
                  onChange={this.handleChange}
                  name="direccion"
                  type="text"
                  class="form-control"
                  value={this.state.form.direccion}
                />
              </div>

              <h5>Perfil profesional</h5>

              <div className="form-group">
                <label>Cargo o titulo breve de su hoja de vida</label>
                <input
                  onChange={this.handleChange}
                  name="titulo"
                  type="text"
                  className="form-control"
                  placeholder="Ej: Analista de crédito y riesgo"
                  value={this.state.form.titulo}
                />
              </div>

              <div className="form-group">
                <label>Descripción breve de su perfil profesional</label>
                <textarea
                  onChange={this.handleChange}
                  name="descripcionPerfil"
                  rows="6"
                  class="form-control"
                  placeholder="Ej: Amplia experiencia en la área financiera analista de crédito (énfasis en el manejo, identificación, clasificación, análisis y evaluación de operaciones de crédito). Análisis y aplicación de políticas financieras para la toma de decisiones en productos financieros y riesgo crediticio. Análisis de peticiones, quejas y reclamos."
                  value={this.state.form.descripcionPerfil}
                ></textarea>
                <p>(máximo 500 carácteres)</p>
              </div>

              <h5>Experiencias profesionales</h5>

              <div className="form-group">
                <label>Cargo o titulo breve de su hoja de vida</label>
                <input
                  className="form-control"
                  onChange={this.handleChange}
                  type="text"
                  name="experienciapro"
                  value={this.state.form.experienciapro}
                />
              </div>

              <div className="form-group">
                <label>Empresa</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="empresaExperiencia"
                  class="form-control"
                  value={this.state.form.empresaExperiencia}
                />
              </div>

              <div className="form-group">
                <label>Rango de tiempo en la empresa</label>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  name="rangoEmpresa"
                  value={this.state.form.rangoEmpresa}>
                  <option>1 a 3 meses</option>
                  <option>3 a 6 meses</option>
                  <option>1 año</option>
                  <option>2 años</option>
                  <option>3 años</option>
                </select>
              </div>

              <div className="form-group">
                <label>Cargo</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  class="form-control"
                  name="cargoEmpresa"
                  value={this.state.form.cargoEmpresa}
                />
              </div>

              <div className="form-group">
                <label>Idiomas</label>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  name="idioma">
                  <option>Inglés</option>
                  <option>Español</option>
                  <option>Frances</option>
                  <option>Portugués</option>
                  <option>Alemán</option>
                </select>
              </div>

              <div className="form-group">
                <label>Nivel</label>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  name="nivelIdioma"
                  value={this.state.form.nivelIdioma}>
                  <option>Alto</option>
                  <option>Intermedio</option>
                  <option>Bajo</option>
                </select>
              </div>

              <button className="btn btn-success btn-block" type="submit">
                Registrar
              </button>
            </form>
            <br />
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default MainFormularioRegistro;