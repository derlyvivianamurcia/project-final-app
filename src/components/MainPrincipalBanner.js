import React from "react";
import MovilidadReducida from "../images/MovilidadReducida.png";

const MainPrincipalBanner = () => {
  return (
    <div className="btext">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="textMain">Bienvenid@</h1>
            <h4 className="text-justify text-white">
            Esta página esta creada pensando ti, si eres una persona que
              pertenece al grupo de PMR (Personas con Movilidad Reducida) eres
              bienvenida(o) conócenos ¡Te va a encantar!.
            </h4>
          </div>

          <div className="col justify-content-center">
            <img
              className="imagenBanner img-fluid"
              src={MovilidadReducida}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPrincipalBanner;