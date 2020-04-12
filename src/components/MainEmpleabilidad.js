import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Style/Formulario.css'
import ItemsEmpleos from './itemsEmpleos';
import { data } from "../utils/mocks/data.js";

class MainEmpleabilidad extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Encuentra tu siguiente empleo </h5>
                                    <form className="form-signin"></form>
                                    <div className="row">
                                        <div className="col">
                                            <select id="inputState" className="form-control">
                                                <option selected>Tipo de Contrato...</option>
                                                <option>Hola</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Puesto deseado"></input>
                                        </div>
                                        <div className="col">
                                            <select id="inputState" className="form-control">
                                                <option selected>Municipio...</option>
                                                <option>hola</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-lg btn-btn btn-info buttonForm text-uppercase" type="submit">Buscar empleo</button>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <label className="inputState">Mis postulaciones</label>
                                                <div className="col">
                                                    <button className="btn btn-lg btn-btn btn-info buttonForm text-uppercase" type="submit">Ingrese su hoja de vida</button>
                                                </div>
                                            </div>
                                        </div>
                                        <ItemsEmpleos ItemsEmpleos={data.ItemsEmpleos} />
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                        </div>
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

export default MainEmpleabilidad;