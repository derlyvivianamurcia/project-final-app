import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/Nav.css'
import logo from '../images/Logo.png'



const Header = (porps) => {
    return (
        <header className="colorbg">
            <nav className="navbar container navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="$false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item avatar">
                        <img src={logo} className="rounded-circle z-depth-0"
                            alt="avatar image" height="60" />
                    </li>
                </ul>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text" to='/'>Inicio
                            <span> |</span>
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="text-two nav-link text-secondary font-weight-bold" href="#">Cursos</a>
                        </li>
                        <li className="nav-item">
                            <Link className="text-two nav-link text-secondary font-weight-bold" to='/Acompanamiento'>Acompañamiento</Link>
                        </li>
                        <li className="nav-item">
                            <a className="text-two nav-link text-secondary font-weight-bold" href="#">Empleabilidad</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/InicioSesion' className="text-two nav-link text-secondary font-weight-bold">Inicio Sesión</Link>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;
