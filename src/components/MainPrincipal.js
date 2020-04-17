import React from "react";
import cardempleo from "../images/principal/cardempleo .png";
import cardcurso from "../images/principal/cardcursos.png";
import cardacompanamiento from "../images/principal/cardacompanamiento.png";
import '../Style/all_app.css'
import Acercade from "./MainAcercade";
import imagenuno from '../images/principal/personadiscapitadauno.jpg'
import imagendos from '../images/principal/personadiscapacitadados.jpg'



const MainPrincipal = () => {
  return (
    <>
      <div className="container">
        <div className=" mt-5 text-justify ">
          <h3 className="colorTextAzul">Bienvenido<span>(a)</span> a la plataforma creada para personas en condición de movilidad reducida.</h3>
        </div>
        <div className="row" >
          <div className="col-6 contenedor">
            <img className="img-fluid imagen shadow-lg p-3 mb-3 mt-3 rounded" src={imagenuno}></img>
          </div>
          <div className="col-6 contenedor">
          <img className="img-fluid imagen shadow-lg p-3 mb-3 mt-3 rounded" src={imagendos}></img>
          </div>
        </div>

        <h2 className="text-center mt-5 colorTextAzul">Nuestros servicios</h2>
        <div className="row marginTop">
          <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <img
                src={cardcurso}
                className="card-img-top "
                alt="Image responsive"
              />
              <div className="card-body">
                <h4
                  className="colorText text-decoration-none mb-4"
                >
                  CURSOS<span>:</span>
                </h4>
                <p className="card-text text-justify mt-2">
                  Esta sección esta diseñada, para que puedas realizar los cursos que desees <span>✌</span> {" "}
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
                <h4
                  className="text-decoration-none colorText mb-4 "

                >
                  ACOMPAÑAMIENTO EMOCIONAL<span>:</span>
                </h4>

                <p className="card-text text-justify mt-2  overflow-auto">
                En este espacio podrá recibir ayuda de profesionales
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
                <h4

                  className="text-decoration-none colorText  mb-4 "
                >
                  EMPLEABILIDAD<span>:</span>
                </h4>
                <p className="card-text text-justify mt-2">
                Sección de oportunidades, aquí podrás buscar las ofertas laborales que sean afines a tu perfil
                </p>
              </div>
            </div>
          </div>
        </div>
        <Acercade />
      </div>
    </>
  );
};
export default MainPrincipal;