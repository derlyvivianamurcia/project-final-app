import React from "react";
import imageacompanamiento from "../images/acompañamiento/acompañamiento.jpg";
import pregunta from "../images/acompañamiento/signo.jpg";
import Citas from './citas'

class Heroseccioncitas extends React.Component {
   render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="text-center mt-3">
              Para nosotros es muy importante que puedas acceder a estos
              espacios de ayudas, donde por medio de especialistas puedes
              recibir orientación, para mejorar o potenciar el rendimiento
              profesional, aumentar la calidad de vida, mejorar las relaciones,
              solucionar problemas concretos.
            </h5>
          </div>
          <img className="img-fluid" src={imageacompanamiento} />
        </div>
        <div className="row">
          <div className="col-6 mt-2 d-flex justify-content-center">
            <img src={pregunta} width="200" height="200" />
          </div>
          <div className="col-6 mt-2 d-flex justify-content-center align-items-center">
            <p>
              Solo debes llenar el formulario con tus datos, para solicitar tu
              cita, y muy pronto un especialista se comunicara contigo
            </p>
          </div>
        </div>
        <h4 className="text-center mt-3">
          Que estás esperando solicita tu cita ya!!!
        </h4>
        <div className="row justify-content-center d-flex mt-3">
          <div className="card ">
            <div className="col-12">
              <Citas />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Heroseccioncitas;
