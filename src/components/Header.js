import React from 'react'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header class="header_area">
    <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand logo_h" href="index.html"><img src="img/logopor.png" alt=""></img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul class="nav navbar-nav menu_nav justify-content-end">
                        <li class="nav-item active"> <Link to='/' className="nav-link">Inicio</Link>

                        
                       </li>
                        <li class="nav-item"><a class="nav-link" href="about.html">Portafolio de Servicios</a></li>
                        <li class="nav-item"><a class="nav-link" href="services.html">Experiencia</a></li>
                        <li class="nav-item"><Link to='/InicioSesion' className="nav-link">Inicio Sesión</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>
  );
}
export default Header;
