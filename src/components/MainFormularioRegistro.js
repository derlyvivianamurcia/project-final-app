import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

class MainFormularioRegistro extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      nombreUsuario: "",
      apellidoUsuario: "",
      email: "",
      password: "",
      passwordConfirmacion: "",
      tipoId: "Cédula de ciudadanía",
      identificacionUser: "",
      celularUsuario: "",
      municipio: "Medellín",
      genero: "Femenino",
      direccion: "",
      titulo: "",
      descripcionPerfil: "",
      experienciapro: "",
      empresaExperiencia: "",
      rangoEmpresa: "1 a 3 meses",
      cargoEmpresa: "",
      idioma: "Inglés",
      nivelIdioma: "Alto",
    },
  };

  async componentDidMount() {
    const usuarioAutenticado = JSON.parse(localStorage.getItem("access_token"));
    if (usuarioAutenticado) {
      axios
        .get(
          `https://api-eduskill.now.sh/usuarios?email=${usuarioAutenticado.email}`
        )
        .then((response) => {
          const data = response.data;
          this.setState({
            form: {
              nombreUsuario: data[0].nombreUsuario,
              apellidoUsuario: data[0].apellidoUsuario,
              email: data[0].email,
              password: data[0].password,
              passwordConfirmacion: data[0].passwordConfirmacion,
              tipoId: data[0].tipoId ? data[0].tipoId : "Cédula de ciudadanía",
              identificacionUser: data[0].identificacionUser,
              celularUsuario: data[0].celularUsuario,
              municipio: data[0].municipio ? data[0].municipio : "Medellín",
              genero: data[0].genero ? data[0].genero : "Femenino",
              direccion: data[0].direccion,
              titulo: data[0].titulo,
              descripcionPerfil: data[0].descripcionPerfil,
              experienciapro: data[0].experienciapro,
              empresaExperiencia: data[0].empresaExperiencia,
              rangoEmpresa: data[0].rangoEmpresa
                ? data[0].rangoEmpresa
                : "1 a 3 meses",
              cargoEmpresa: data[0].cargoEmpresa,
              idioma: data[0].idioma ? data[0].idioma : "Inglés",
              nivelIdioma: data[0].nivelIdioma ? data[0].nivelIdioma : "Alto",
            },
          });
        });
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleClick = (e) => {
    console.log("boton presionado");
  };

  _Alerta() {
    Swal.fire(
      "Registro exitoso!😃",
      "Has clic en el botón",
      "success"
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const usuarioAutenticado = JSON.parse(localStorage.getItem("access_token"));
    if (usuarioAutenticado) {
      // editar put
      axios
        .put(`https://api-eduskill.now.sh/usuarios/${usuarioAutenticado.id}`, {
          ...this.state.form,
        })
        .then((respuesta) => {
          if (respuesta.status == 200) {
            window.confirm("Usuario editado exitosamente");
          }
        });
    } else {
      // registrar post
      axios
       .post(`https://api-eduskill.now.sh/usuarios/`, { ...this.state.form })
        .then((respuesta) => {
          if (respuesta.status == 201) {
            if (this._Alerta) {
              window.location = "/inicioSesion";
            } else { 
              window.location = "/inicioSesion";
            }
          }
        });
    }
  };

  render() {
    let mensajeBoton;
    let mensajeTitulo;
    const usuarioAutenticado = JSON.parse(localStorage.getItem("access_token"));
    if (usuarioAutenticado) {
      mensajeBoton = "Editar";
    } else {
      mensajeBoton = "Registrar";
    }

    if (usuarioAutenticado) {
      mensajeTitulo = "Editar hoja de Vida";
    } else {
      mensajeTitulo = "Formulario de Registro";
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-6 border">
            <h5 className="text-center mt-3">{mensajeTitulo}</h5>
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
                  type="password"
                  name="password"
                  className="form-control"
                  value={this.state.form.password}
                />
              </div>

              <div className="form-group">
                <label>Confirmar contraseña</label>
                <input
                  onChange={this.handleChange}
                  type="password"
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
                >
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
                  type="number"
                  value={this.state.form.identificacionUser}
                />
              </div>

              <div className="form-group">
                <label>Teléfono celular</label>
                <input
                  onChange={this.handleChange}
                  name="celularUsuario"
                  type="number"
                  className="form-control"
                  value={this.state.form.celularUsuario}
                />
              </div>

              <div className="form-group">
                <label>Municipio</label>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  name="municipio"
                  value={this.state.form.municipio}
                >
                  <option>Medellín</option>
                  <option>Bello</option>
                  <option>Envigado</option>
                  <option>El retiro</option>
                  <option>Itaguí</option>
                </select>
              </div>

              <h6>Genero</h6>
              <div className="form-check form-check-inline">
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  name="genero"
                  value={this.state.form.genero}
                >
                  <option>Femenino</option>
                  <option>Masculino</option>
                  <option>Bisexual</option>
                  <option>Homosexual</option>
                </select>
              </div>

              <div className="form-group">
                <br />
                <label>Dirección</label>
                <input
                  onChange={this.handleChange}
                  name="direccion"
                  type="text"
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
                  value={this.state.form.empresaExperiencia}
                />
              </div>

              <div className="form-group">
                <label>Rango de tiempo en la empresa</label>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  name="rangoEmpresa"
                  value={this.state.form.rangoEmpresa}
                >
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
                  className="form-control"
                  name="cargoEmpresa"
                  value={this.state.form.cargoEmpresa}
                />
              </div>

              <div className="form-group">
                <label>Idiomas</label>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  name="idioma"
                >
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
                  value={this.state.form.nivelIdioma}
                >
                  <option>Alto</option>
                  <option>Intermedio</option>
                  <option>Bajo</option>
                </select>
              </div>

              <button
                onClick={this.handleClick}
                onClick={this._Alerta} 
                className="btn btn-orange btn-block"
                type="submit"
              >
                <strong>{mensajeBoton}</strong>
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
