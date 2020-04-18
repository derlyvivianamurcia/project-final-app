import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleClick = (e) => {
    //
  };
  handleSubmitEditar = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3004/usuarios}`)
      .then((respuesta) => {
        this.setState({ usuarioConsultado: respuesta.data[0] });
        this.state();
      });
  };



  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3004/usuarios?email=${this.state.form.email}`)
      .then((respuesta) => {
        this.setState({ usuarioConsultado: respuesta.data[0] });
        this.ValidarContrasena();
      });
  };

  ValidarContrasena() {
    if (this.state.form.contrasena == this.state.usuarioConsultado.contrasena) {
      window.location = "/";
    } else {
      window.location.reload();
    }
  }

   render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>

          <div className="col-6 border">
            <h5 className="text-center">Iniciar Sesión</h5>
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

              <button
                onClick={this.handleClick}
                className=" btn btn-orange btn-block"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </form>
            <br />
            <h6>¿Primera vez en EduSkill?</h6>

            <Link to="/FormularioRegistro" className="btn btn-info btn-block">
              ¡Registrate aquí!
            </Link>
            {/* hoja de vida  */}
            <Link to="/hojadevida" className="btn btn-info btn-block">
              Editar hoja de vida
            </Link>
            <br />
          </div>

          <div className="col"></div>
        </div>


      </div>
    );
  }
}

export default MainInicioSesion;