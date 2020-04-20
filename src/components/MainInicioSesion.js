import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class MainInicioSesion extends React.Component {
  state = {
    loading: false,
    error: null,
    usuarioConsultado: {},
    form: {
      email: "",
      contrasena: "",
    },
  };

  componentDidMount() {
    console.log("**", this.props);
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state.form;

    axios
      .get(`https://api-eduskill.now.sh/usuarios?email=${email}`)
      .then((response) => {
        const { data } = response;

        if (data[0] == undefined) {
          return alert("Usuario o Contraseña incorrectos");
        }

        if (this.ValidarContrasena(data[0].password)) {
          const usuario = {
            id: data[0].id,
            email: data[0].email,
          };
          localStorage.setItem("access_token", JSON.stringify(usuario));

          if (this.props.match.path === "/cursos/:id") {
            return window.location.reload();
          }
          if (this.props.match.path === "/editarHojaDeVida") {
            return window.location.reload();
          }

          return (window.location = "/");
        }

        alert("Usuario o Contraseña incorrectos");
      });
  };

  ValidarContrasena(password) {
    const { contrasena } = this.state.form;
    return contrasena === password;
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col"></div>

          <div className="col-6 border">
            <h5 className="text-center mt-4">Iniciar Sesión</h5>
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="inputEmail">Usuario</label>
                <input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="inputEmail"
                  className="form-control"
                  value={this.state.form.email}
                  required
                />
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="contrasena"
                  id="inputPassword"
                  className="form-control"
                  value={this.state.form.contrasena}
                  required
                />
              </div>

              <button className=" btn btn-orange btn-block" type="submit">
                <strong>Iniciar Sesión</strong>
              </button>
            </form>
            <br />
            <h6>¿Primera vez en EduSkill?</h6>

            <Link to="/FormularioRegistro" className="btn btn-info btn-block">
              <strong>¡Registrate aquí!</strong>
            </Link>

            <br />
          </div>

          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainInicioSesion);
