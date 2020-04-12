import React from "react";

function Empleos(props) {
    const { Empleos } = props;
    return (
        <>
            <section className=" features_area ">
                <div className="container ">
                    <div className="row justify-content-center ">
                        <div className="col-lg-8 text-center ">
                            <div className="main_title ">
                                <h2>Empleos </h2>
                                <p>
                                    Encuentra más de 20 millones de empleos
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row feature_inner ">
                        {Empleos.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-6" key={`ItemsEmpleos-item-${index}`}>
                                    <div class="card" key={`ItemsEmpleos-item-${index}`}>
                                        <img src={item.imgEmpleo} class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{item.nameEmpleo}</h5>
                                            <p>{item.ubicacionEmpleo}</p>
                                            <p class="card-text"><strong>Descripción: </strong>{item.descripcionEmpleo}</p>
                                            <p><strong>Tipo empleo:</strong> {item.tipoEmpleo} </p>
                                            <a href="#" class="btn btn-primary">VER EMPLEO</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Empleos;