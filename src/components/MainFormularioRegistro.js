import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Style/Formulario.css'

class MainFormularioRegistro extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-8 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Formulario de Registro </h5>
                  <form className="form-signin"></form>
                  <div className="form-row">
                    <div className="col">
                      <label className="inputPassword">Nombre</label>
                      <input type="text" className="form-control" placeholder="Nombre"></input>
                    </div>
                    <div className="col">
                      <label className="inputPassword">Apellidos</label>
                      <input type="text" className="form-control" placeholder="Apellidos"></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="inputAddress">Correo</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Correo electronico"></input>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <label className="inputPassword">Contraseña</label>
                      <input type="text" className="form-control" placeholder="Contraseña"></input>
                    </div>
                    <div className="col">
                      <label className="inputPassword">Confirmación</label>
                      <input type="text" className="form-control" placeholder="Confirmación"></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label className="inputState">Departamento</label>
                      <select id="inputState" className="form-control">
                        <option selected>Departamento...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label className="inputState">Municipio</label>
                      <select id="inputState" className="form-control">
                        <option selected>Municipio...</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <label className="inputPassword">Puesto</label>
                      <input type="text" className="form-control" placeholder="Puesto deseado"></input>
                    </div>
                    <div className="col">
                      <label className="inputPassword">Celular</label>
                      <input type="text" className="form-control" placeholder="Celular"></input>
                    </div>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" for="inlineRadio3"> Genero </label>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                    <label className="form-check-label" for="inlineRadio1">Hombre</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                    <label className="form-check-label" for="inlineRadio2">Mujer</label>
                  </div>
                  <div className="col center">
                    <button className="btn btn-lg  btn-block btn-btn btn-info buttonForm text-uppercase" type="submit">Registrar</button>
                  </div>
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

export default MainFormularioRegistro;