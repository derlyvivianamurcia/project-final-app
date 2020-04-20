import React from "react";
import imageacompanamiento from "../images/acompañamiento/acompañamiento.jpg";
import pregunta from "../images/acompañamiento/signo.jpg";
import axios from "axios";
import InicioSesion from "../pages/InicioSesion";

class Heroseccioncitas extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      nombreUsuario: "",
      email: "",
      preguntas: "",
    },
  };

  async componentDidMount() {
    const usuarioAutenticado = JSON.parse(localStorage.getItem("access_token"));
    if (usuarioAutenticado) {
      axios
        .get(
          `https://api-eduskill.now.sh/usuarios?email=${usuarioAutenticado.email}`
        )
        .then((response) => {
          const data = response.data;
          this.setState({
            form: {
              nombreUsuario: data[0].nombreUsuario,
              email: data[0].email,
            },
          });
        });
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const usuarioAutenticado = JSON.parse(localStorage.getItem("access_token"));
    if (usuarioAutenticado) {
      window.confirm("Su petición fue realizada con éxito, muy pronto nos comunicaremos contigo");
     
  }   else {
    window.confirm("Para realizar la solicitud, debe iniciar sesión");
   
  }
};
  render() {
    return (
      <section className="container btext marginTop">
        <div className="row ">
          <div className="col-12">
            <h5 className="text-center mt-3">
              Para nosotros es muy importante que puedas acceder a estos
              espacios de ayudas, donde por medio de especialistas puedes
              recibir orientación, para mejorar o potenciar el rendimiento
              profesional, aumentar la calidad de vida, mejorar las relaciones,
              solucionar problemas concretos.
            </h5>
          </div>
          <div className="col-6 mt-3 d-flex justify-content-center">
            <img src={pregunta} width="200" height="200" />
          </div>
          <div className="col-6 d-flex align-items-center colorTextAzul">
            <h5>¡Que estás esperando, solicita tu cita ya!</h5>
          </div>
          <div className="col-sm-12 col-md-6">
            <div>
              <p className="text-center mt-3">
                A continuación encontraras un formulario con tus datos
              </p>
              <ol>
                <li>Verifica que sean los correctos o modíficalos</li>
                <li>
                  En el cuadro de texto específica que tipo de consulta vas a
                  realizar
                </li>
                <li>
                  Click en el botón Solicitar cita para enviar la información a
                  uno de nuestros especialista
                </li>
              </ol>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="nombreUsuario"
                  className="form-control"
                  value={this.state.form.nombreUsuario}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.state.form.email}
                />
              </div>
              <div className="form-group">
                <textarea
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="En este espacio usted puede hacer una pregunta al especialista"
                  name="preguntas"
                  id="txt-area"
                  cols="40"
                  rows="10"
                  value={this.state.form.preguntas}
                ></textarea>
                </div>
            <div className="form-group d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-orange font-weight-bold"
                onClick={this.handleSubmit}

              >
                Solicitar cita
              </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid marginTop" src={imageacompanamiento} />
          </div>
        </div>
      </section>
    );
  }
}
export default Heroseccioncitas;
