import React from "react";
import imageacompanamiento from "../images/acompañamiento/acompañamiento.jpg";
import pregunta from "../images/acompañamiento/signo.jpg";

const Heroseccioncitas = () => {
  return (
    <section className="container btext marginTop">
      <div className="row ">
        <div className="col-12">
          <h5 className="text-center mt-3">
            Para nosotros es muy importante que puedas acceder a estos espacios
            de ayudas, donde por medio de especialistas puedes recibir
            orientación, para mejorar o potenciar el rendimiento profesional,
            aumentar la calidad de vida, mejorar las relaciones, solucionar
            problemas concretos.
          </h5>
        </div>
        <div className="col-6 mt-3 d-flex justify-content-center">
          <img src={pregunta} width="200" height="200" />
        </div>
        <div className="col-6 d-flex align-items-center colorTextAzul">
          <h5>¡Que estás esperando, solicita tu cita ya!</h5>
        </div>
        <div className="col-6">
          <div>
            <p className="text-center mt-3">
              A continuación encontraras un formulario con tus datos
            </p>
            <ol>
              <li>Verifica que sean los correctos o modíficalos</li>
              <li>
                En el cuadro de texto específica que tipo de consulta vas a
                realizar
              </li>
              <li>
                Click en el botón Solicitar cita para enviar la información a
                uno de nuestros especialista
              </li>
            </ol>
          </div>
          <form
            enctype="multipart/form-data"
            method="post"
            onSubmit="formSubmit()"
          >
            <div className="form-group mt-3">
              <label className="label" for="name" id="name-label">
                Nombre
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Ingrese su nombre"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" for="email" id="email-label">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Ingrese su correo"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="En este espacio usted puede hacer una pregunta al especialista"
                name="preguntas"
                id="txt-area"
                cols="40"
                rows="10"
              ></textarea>
            </div>
            <div className="form-group d-flex justify-content-center">
              <button
                type="submit"
                value="Submit"
                className="btn btn-orange font-weight-bold"
              >
                Solicitar cita
              </button>
            </div>
          </form>
        </div>
        <div className="col-6">
          <img className="img-fluid marginTop" src={imageacompanamiento} />
        </div>
      </div>
    </section>
  );
};
export default Heroseccioncitas;