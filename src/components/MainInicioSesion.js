import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class MainInicioSesion extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      email: "",
      password: "",
    },
    consultado: {},
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
        this.ValidarPassword();
      });
  };

  ValidarPassword() {
    console.log("validacion" + this.state.consultado.password);
    if ("12345" == this.state.consultado.password) {
      console.log(
        "contraseña de usuario consultado" + this.state.consultado.password
      );
      console.log("contraseña en el input" + this.state.consultado.password);
      console.log("dejelo pasar a la siguiente pantalla");
    } else {
      console.log("contraseña no coincide, incorrecta");
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Iniciar Sesión </h5>
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                      <input
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Ingrese su usuario"
                        value={this.state.form.email}
                        required
                      ></input>
                      <label className="inputEmail">Usuario</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        onChange={this.handleChange}
                        type="password"
                        name="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Ingrese su contraseña"
                        value={this.state.form.password}
                        required
                      ></input>
                      <label className="inputPassword">Contraseña</label>
                    </div>
                    <button
                      onClick={this.handleClick}
                      className="btn btn-primary"
                      type="submit"
                    >
                      Iniciar Sesión
                    </button>
                  </form>
                  <div className="form-label-group">
                    <div className="card-title text-center">
                      ¿Primera vez en EduSkill?
                    </div>
                  </div>
                  <Link
                    to="/FormularioRegistro"
                    className="nav-link  text-center"
                  >
                    ¡Registrate aquí!
                  </Link>
                  <hr className="my-4"></hr>
                  <div className="card-title text-center">
                    Copyright © 2020 EduSkill
                  </div>
                  <div className="card-title text-center">
                    Área de desarrollo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainInicioSesion;
