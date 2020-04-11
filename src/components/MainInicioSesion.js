import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MainInicioSesion extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Inicir Sesión </h5>
                                    <form className="form-signin"></form>
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Ingrese su usuario" required ></input>
                                        <label className="inputEmail">Usuario</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Ingrese su contraseña" required></input>
                                        <label className="inputPassword">Contraseña</label>
                                    </div>

                                  
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Iniciar Sesión</button>

                                    <div className="form-label-group">
                                    <div className="card-title text-center">¿Primera vez en EduSkill?</div>
                                    </div>

                                
                                       <Link to='/FormularioRegistro' className="nav-link  text-center">¡Registrate aquí!</Link>

                                    <hr className="my-4"></hr>
                                    <div className="card-title text-center">Copyright © 2020 EduSkill</div>
                                    <div className="card-title text-center">Área de desarrollo</div>
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