import React from 'react';

const Heroseccioncitas = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Para nosotros es muy importante que puedas acceder a estos espacios de ayudas.</h1>
                    <p className="text-center">Ques estás esperando agenda tu cita ya!!!</p>
                </div>

            </div>
            <div className="row">
                <div className="col-6">
                    <form className="form">
                        <div>
                            <label>Nombre:</label>
                            <input type="text" className="form-control" placeholder="Nombre"></input>
                        </div>
                        <div>
                            <label>Celular:</label>
                            <input type="text" className="form-control" placeholder="Celular"></input>
                        </div>
                        <div>
                            <label>Em@il:</label>
                            <input type="email" className="form-control" placeholder="Em@il"></input>
                        </div>
                    </form>
                    <button type="" className="btn btn-primary">Submit</button>
                    <div className="col-6">
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Heroseccioncitas