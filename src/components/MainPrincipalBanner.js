import React from 'react';
import '../Style/MainPrincipal.css'

const MainPrincipalBanner =()=>{
    return(
<main className="main-header">
<div className="background-overlay text-white py-5">
    <div className="container">
        <div className="row d-flex">
            <div className="cont text-center">
                <h1 className="textMain">
                    Bienvenid@
                     </h1>
                <h4 className="text-justify">Esta página esta creada pensando ti, si eres una persona que pertenece al grupo de PMR (personas con movilidad reducida) eres bienvenid@ conócenos te va a encantar.</h4>
                <a href="#" className="btn btn-outline-secondary btn-lg text-white bg-dark">
                    Más información
                </a>
            </div>
            <div className="col-sm-6">
            </div>
        </div>
    </div>
</div>
</main>
    )
}
export default MainPrincipalBanner
