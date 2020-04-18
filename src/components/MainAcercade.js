import React from "react";
import "../Style/all_app.css";
import avataruno from "../images/principal/avataruno.png";
import avatardos from "../images/principal/avatardos.png";
import avatartres from "../images/principal/avatartres.png";

const Acercade = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center colorTextAzul">Quienes Somos</h3>
        </div>
        <div className="col-md-4 col-xs-12 text-center">
          <img src={avataruno} width="250" height="200" />
        </div>
        <div className="col-md-4 col-xs-12 text-center">
          <img src={avatardos} width="250" height="200" />
        </div>
        <div className="col-md-4 col-xs-12 text-center">
          <img src={avatartres} width="250" height="200" />
        </div>
        <div className="col-12 mt-5">
          <p className="text-center">
            Es un proyecto creado y desarrollado por tres mujeres emprendedoras,
            soñadoras, amantes de la tecnología y el desarrollo.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h3 className="colorTextAzul text-right">A quien va dirigido</h3>
        </div>

        <div className="col-md-6 col-sm-12">
          <img
            className="img-fluid image"
            src="https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/11/05104519/atenci%C3%B3n-al-cliente.jpg"
          />
        </div>

        <div className="col-md-6 col-sm-12 p-4 d-flex align-items-center">
          <p className="text-justify">
            Esta plataforma fue creada para personas en condición de
            discapacidad, con movilidad reducida <spam>(PMR),</spam>
            perseverantes que eligen capacitarse para lograr conseguir un empleo
            digno y mejorar su calidad de vida.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h1 className="text-center colorText">Nuestros Valores</h1>
        </div>

        <div className="col-12 mt-5">
          <div className="card-group">
            <div className="card grow">
              <img
                className="card-img-top"
                src="https://static.wixstatic.com/media/aa1181_e3fc6e8aa7bc47bfb9502960988d4ecc~mv2.png/v1/fill/w_626,h_470/aa1181_e3fc6e8aa7bc47bfb9502960988d4ecc~mv2.png"
                width="100"
                height="150"
              />
              <div class="card-body">
                <h5 class="card-title">Perseverancia</h5>
              </div>
            </div>

            <div className="card grow">
              <img
                className="card-img-top"
                src="https://miro.medium.com/max/927/1*-Ykp48rlPOtB4obCL62HnQ.jpeg"
                width="100"
                height="150"
              />
              <div class="card-body">
                <h5 className="card-body text-center">Eficacia</h5>
              </div>
            </div>

            <div className="card grow">
              <img
                className="card-img-top"
                src="https://monitoraeducacionespecial.com/wp-content/uploads/2019/07/Donde-puede-trabajar-un-Integrador-Social.png"
                width="100"
                height="150"
              />
              <div class="card-body">
                <h5 className="card-body text-center">Integración</h5>
              </div>
            </div>

            <div className="card grow">
              <img
                className="card-img-top"
                src="https://imagenwhatsapp.com/wp-content/uploads/2015/11/motiv13d9451e7d6abdf40b914289846361b6.jpg"
                width="100"
                height="150"
              />
              <div class="card-body">
                <h5 className="card-body text-center">Superación</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acercade;