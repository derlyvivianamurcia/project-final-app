import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

const Header = (props) => {
  return (
    <header>
      <nav className="navbar container navbar-expand-lg  colorText ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav ml-auto nav-flex-icons">
          <li className="nav-item avatar">
            <img
              src={logo}
              className="rounded-circle"
              alt="avatar image"
              height="70"
              width="70"
            />
          </li>
        </ul>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto colorText">
            <li className="nav-item">
              <Link
                className="text-two nav-link  font-weight-bold colorText"
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-two nav-link colorText font-weight-bold"
                to="/Cursos"
              >
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-two nav-link font-weight-bold colorText"
                to="/Acompanamiento"
              >
                Acompañamiento
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Empleabilidad"
                className="text-two nav-link font-weight-bold colorText"
              >
                Empleabilidad
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/InicioSesion"
                className="text-two nav-link font-weight-bold colorText"
              >
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
