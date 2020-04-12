import React from 'react';
import cardempleo from '../images/cardempleo.png'
import cardcurso from '../images/cardcurso.png'
import cardacompanamiento from '../images/cardacompanamiento.png'
import { Link } from 'react-router-dom';


const MainPrincipal = () => {
    return (
        <>
           <section className="container mt-5">
                    <div className="card-group">
                        <div className="card">
                            <img src={cardcurso} className="card-img-top " alt="Image responsive" />
                            <div className="card-body">
                                <a className="card-title h4" to="" >CURSOS</a>
                                <p className="card-text text-justify mt-2">En esta sección encontrará cursos, de diferentes modalidades que están a su disposición. </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={cardacompanamiento} className="card-img-top " alt="Image responsive" />
                            <div className="card-body">
                            <a className="card-title h4">ACOMPAÑAMIENTO EMOCIONAL</a>
                                <p className="card-text text-justify mt-2">Aquí  podrás acceder a citas de acompañamiento psicológico.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={cardempleo} className="card-img-top" alt="Image responsive" />
                            <div className="card-body">
                                <a className="card-title h4">EMPLEABILIDAD</a>
                                <p className="card-text text-justify mt-2">En esta sección podrá encontrar vacantes de empleo, afines a su experiencia o conocimientos.</p>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
export default MainPrincipal