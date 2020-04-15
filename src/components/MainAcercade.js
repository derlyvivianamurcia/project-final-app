import React from 'react';
import '../Style/all_app.css'


const Acercade = () => {
    return (
        <div className="container">
            <h3 className="text-left"> Quienes Somos</h3>

            <div className="row">
                <div className="col-6 d-flex align-items-center">
                    <div className="text-justify mt-2">
                        <p >Es un proyecto creado y desarrollado por tres mujeres,
                        que tienen un gusto en común, su pasión por la tecnología
                        y el desarrollo Front-end, al identificar las necesidades
                        de personas en condiciones de discapacidad, buscan mitigar
                        y eliminar las fronteras que hoy son posibles de eliminar
                                gracias a las Tic</p>
                    </div>
                </div>
                < div className="col-6">< img className="img-fluid image" src="https://www.jezzmedia.com/wp-content/uploads/2016/11/quienes-somos.jpg"/></div>
            </div>

            <h3 className="colorText text-right mt-5 ">A quien va dirigido </h3>
            <div className="row mx-md-n5">
                <div className="col-6"><img className="img-fluid image" src="https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/11/05104519/atenci%C3%B3n-al-cliente.jpg"/></div>
                <div className="col-6 d-flex align-items-center px-md-5">
                    <p className="text-justify">Esta plataforma fue creada para personas en condición de discapacidad, con movilidad
                    reducida <samp>(PMR),</samp>perseverantes que eligen capacitarse para lograr conseguir
                    un empleo digno y mejorar su calidad de vida.</p>
                    <p className="text-justify">Dichos empleos en algunos casos podrán ser realizados desde la comodidad de su casa <samp>(modalidad teletrabajo),</samp>
                puesto que para muchas de estas personas es de gran dificultad movilizarse solos, debido a que todas las áreas
                y espacios públicos no están adaptados.</p>
                </div>
            </div>
            <h1 className="text-center mt-5 colorText">Nuestros Valores</h1>
            <div className="card-group mt-5">
                <div className="card grow">
                    <img className="card-img" src="https://static.wixstatic.com/media/aa1181_e3fc6e8aa7bc47bfb9502960988d4ecc~mv2.png/v1/fill/w_626,h_470/aa1181_e3fc6e8aa7bc47bfb9502960988d4ecc~mv2.png" width="100" height="100" alt="..." />
                    <p className="card-body text-center"  >Pereseverancia </p>
                </div>

                <div className="card grow">
                    <img className="card-img" src="https://miro.medium.com/max/927/1*-Ykp48rlPOtB4obCL62HnQ.jpeg" width="100" height="100" alt="..." />
                    <p className="card-body text-center"  >Eficacia </p>
                </div>



                <div className="card grow">
                    <img className="card-img" src="https://monitoraeducacionespecial.com/wp-content/uploads/2019/07/Donde-puede-trabajar-un-Integrador-Social.png" width="100" height="100" alt="..." />
                    <p className="card-body text-center"  >Integración </p>
                </div>

                <div className="card grow">
                    <img className="card-img" src="https://imagenwhatsapp.com/wp-content/uploads/2015/11/motiv13d9451e7d6abdf40b914289846361b6.jpg" width="100" height="100" alt="..." />
                    <p className="card-body text-center"  >superación </p>
                </div>
            </div>
        </div>
    )
}
export default Acercade