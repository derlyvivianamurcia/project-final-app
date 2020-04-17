import React from "react";
import cardempleo from "../images/cardempleo.png";
import cardcurso from "../images/cardcurso.png";
import cardacompanamiento from "../images/cardacompanamiento.png";
import "../Style/all_app.css";
import Acercade from "./MainAcercade";

const MainPrincipal = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <br />
            <h1 className="textMain text-center">Bienvenido</h1> <br />
            <h4 className="text-sm-left">
              Esta página esta creada pensando ti, si eres una persona que
              pertenece al grupo de PMR (Personas con Movilidad Reducida) eres
              bienvenida(o) conócenos ¡Te va a encantar!.
            </h4>
            <br />
            <h4 className="text-center">
              ¡Una vez estés registrado en nuestra plataforma podrás acceder a
              los siguientes beneficios!
            </h4>
          </div>

          <div className="row marginTop">
            <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
              <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  src={cardcurso}
                  className="card-img-top "
                  alt="Image responsive"
                />
                <div className="card-body">
                  <h4 className="colorText text-decoration-none mb-4">
                    CURSOS<span>:</span>
                  </h4>
                  <p className="card-text text-justify mt-2">
                    Esta sección esta diseñada, para que puedas realizar los
                    cursos que desees <span>✌</span>, cuenta con sistema de
                    búsqueda y filtrado así podrás seleccionar los cursos que
                    sean de tu agrado y afines a tus habilidades, esto con el
                    fin mejorar tus destrezas, así podrás capacitarte de forma
                    virtual en el área de conocimiento que más te agrade, esta
                    información será anexada a tu hoja de vida.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
              <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  src={cardacompanamiento}
                  className="card-img-top "
                  alt="Image responsive"
                />
                <div className="card-body">
                  <h4 className="text-decoration-none colorText mb-4 ">
                    ACOMPAÑAMIENTO EMOCIONAL<span>:</span>
                  </h4>

                  <p className="card-text text-justify mt-2  overflow-auto">
                    Esta área es vital <span>🙂</span>, puesto que podemos
                    aprender a conocernos, manejar nuestros miedos, explotar y
                    fortalece nuestras habilidades del ser, etc<span>...</span>{" "}
                    es por esto por lo que queremos incluirla en tu proceso,
                    aquí podrás agendar citas con especialistas que te apoyaran
                    y ayudaran, en el momento que lo requieras.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
              <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  src={cardempleo}
                  className="card-img-top"
                  alt="Image responsive"
                />
                <div className="card-body">
                  <h4 className="text-decoration-none colorText  mb-4 ">
                    EMPLEABILIDAD<span>:</span>
                  </h4>
                  <p className="card-text text-justify mt-2">
                    Sección de oportunidades, aquí podrás buscar las ofertas
                    laborales que sean afines a tu perfil, las búsquedas se
                    realizan por medio de filtros, para que los resultados sean
                    los solicitados. Además puedes acceder a tu hoja de vida, la
                    cual se encuentra en un formato sugerido por la plataforma,
                    allí podrás agregar o quitar información, y lo mejor puedes
                    acceder a estas ofertas laborales sin necesidad de ingresar
                    a otras plataformas <span>👌</span> Extraordinario
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Acercade />
        </div>
      </div>
    </>
  );
};
export default MainPrincipal;
