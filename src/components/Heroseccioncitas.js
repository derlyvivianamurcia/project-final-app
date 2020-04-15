import React from "react";
import imageacompanamiento from '../images/acompañamiento/acompañamiento.jpg';
import pregunta from '../images/acompañamiento/signo.jpg';

const Heroseccioncitas = () => {

  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <h5 className="text-center mt-3">
            Para nosotros es muy importante que puedas acceder a estos espacios
            de ayudas, donde por medio de especialistas puedes recibir orientación,
            para mejorar o potenciar el rendimiento profesional, aumentar la calidad
            de vida, mejorar las relaciones, solucionar problemas concretos.
          </h5>
        </div>
        <img className="img-fluid" src={imageacompanamiento} />
      </div>
      <div className="row">
        <div className="col-6 mt-2 d-flex justify-content-center">
          <img src={pregunta} width="200" height="200" />
        </div>
        <div className="col-6 mt-2 d-flex justify-content-center align-items-center">
          <p>Solo debes llenar el formulario con tus datos, para solicitar tu cita,
             y muy pronto un especialista se comunicara contigo</p>
        </div>
      </div>
      <h4 className="text-center mt-3">
        Que estás esperando solicita tu cita ya!!!
          </h4>
      <div className="row justify-content-center d-flex mt-3">
        <div className="card ">
          <div className="col-12">
            <form>
              <div className="form-group mt-3">
              <label className="label" for="name" id="name-label">Nombre</label>
              <input className="form-control" type="text" id="name" placeholder="Ingrese su nombre" required/>
              </div>

              <div className="form-group">
              <label className="label" for="phone">Número de celular:</label>
                    <input className="form-control" type="tel" id="phone" name="phone" placeholder="3233456788" maxlength="10"m required/>
              </div>

              <div className="form-group">
              <label className="label" for="email" id="email-label">Email</label>
                    <input className="form-control" type="email" id="email" placeholder="Ingrese su correo" required/>
              </div>
              <div className="form-group">
              <textarea className="form-control" placeholder="En este espacio usted puede hacer una pregunta al especialista" name="preguntas" id="txt-area" cols="40" rows="10"></textarea>
              </div>
             <div className="form-group d-flex justify-content-center">
              <button type="submit"
               className="btn btn-outline-primary"
               
               
               >
                Solicitar cita
            </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Heroseccioncitas
