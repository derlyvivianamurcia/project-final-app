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

                                    <div class="row">
                                        <div class="col">
                                            <select id="inputState" class="form-control">
                                                <option selected>Tipo de Contrato...</option>
                                                <option>...</option>

                                            </select>
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Puesto deseado"></input>
                                        </div>
                                        <div class="col">
                                            <select id="inputState" class="form-control">
                                                <option selected>Municipio...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="col">
                                        <button className="btn btn-lg btn-btn btn-info buttonForm text-uppercase" type="submit">Buscar empleo</button>
                                        </div>                                      
                                    </div>

                                    <div className="container">
                                        <div className="row">
                                            <div class="col">
                                                <label className="inputState">Mis postulaciones</label>
                                                <div class="col">
                                                    <button className="btn btn-lg btn-btn btn-info buttonForm text-uppercase" type="submit">Ingrese su hoja de vida</button>
                                                </div>

                                            </div>
                                        </div>



                                        <ItemsEmpleos ItemsEmpleos={data.ItemsEmpleos} />

                                        <section className="banner_area">
                                            <div className="banner_inner d-flex align-items-center">
                                                <div className="container">
                                                    <div className="banner_content text-center">
                                                        <div className="page_link">
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
















                                        

                                    </div>


                                    <div class="form-row">
                                        <div class="col">
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