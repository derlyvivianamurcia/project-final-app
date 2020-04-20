import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

class Header extends React.Component {
  DestroySession() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    const usuarioAutenticado = JSON.parse(localStorage.getItem("access_token"));
    let login;
    if (usuarioAutenticado) {
      login = (
        <li className="nav-item dropdown colorTextLink  h5 text-decoration-none">
          <Link
            to=""
            className="dropdown-toggle h5 text-decoration-none"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-sign-in-alt"></i> {usuarioAutenticado.email}
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="" onClick={this.DestroySession} className="dropdown-item">
            <i className="fas fa-sign-in-alt">Cerrar Sesión</i>
              </Link>
          </div>
        </li>
      );
    } else {
      login = (
        <li className="colorTextLink  h5 text-decoration-none">
          <Link
            to="/InicioSesion"
            className="colorTextLink h5 text-decoration-none"
          >
            <i className="fas fa-user-shield">Iniciar Sesión</i>
          </Link>
        </li>
      );
    }

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <img
              src={logo}
              className="rounded-circle z-depth-0"
              alt=""
              height="60"
            />
            <button
              className="navbar-toggler bg-dark ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#collapsingNavbar2"
            >
              <span className="navbar-toggler-icon my-toggler"></span>
            </button>
            <div className="navbar-collapse collapse" id="collapsingNavbar2">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="colorTextLink h5 text-decoration-none" to="/">
                <i className="fas fa-home"></i>
                  Inicio
                </Link>
              </li>
                <li className="nav-item">
                  <Link
                    className="colorTextLink h5 text-decoration-none"
                    to="/cursos"
                  >
                    <i className="fas fa-book-reader"></i> Cursos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="colorTextLink h5 text-decoration-none"
                    to="/acompanamiento"
                  >
                    <i className="fab fa-accessible-icon"></i> Acompañamiento
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/empleos"
                    className="colorTextLink h5 text-decoration-none"
                  >
                    <i className="fas fa-briefcase"></i> Empleos
                  </Link>
                </li>
                {login}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
