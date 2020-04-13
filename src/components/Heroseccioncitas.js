import React from "react";
import Calendario from "../components/Calendario";

const Heroseccioncitas = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">
            Para nosotros es muy importante que puedas acceder a estos espacios
            de ayudas.
          </h2>
          <p className="text-center">
            Que estás esperando agenda tu cita ya!!!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <form>
            <div class="form-group">
              <label>Nombre:</label>
              <input type="text" className="form-control" />
            </div>

            <div class="form-group">
              <label>Celular:</label>
              <input type="text" className="form-control" />
            </div>

            <div class="form-group">
              <label>Email:</label>
              <input type="text" className="form-control" />
            </div>

            <button type="" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="col-1"></div>

        <div className="col-4">
          <div className="">
            <Calendario />
          </div>
        </div>

        <div className="col-1"></div>
      </div>
    </section>
  );
};
export default Heroseccioncitas;
