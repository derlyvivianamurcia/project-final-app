import React from "react";

function ItemsEmpleos(props) {
    const { ItemsEmpleos } = props;
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
                        {ItemsEmpleos.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-6" key={`ItemsEmpleos-item-${index}`}>
                                    <div className=" feature_item ">
                                        <img src=''></img>
                                        <h4>{item.nameEmpleo}</h4>
                                        <p>{item.ubicacionEmpleo}</p>
                                        <p><strong>Descripción:</strong>{item.descripcionEmpleo} </p>
                                        <p><strong>Tipo empleo:</strong> {item.tipoEmpleo} </p>
                                        <div className="col-lg-3 col-md-6">
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

export default ItemsEmpleos;