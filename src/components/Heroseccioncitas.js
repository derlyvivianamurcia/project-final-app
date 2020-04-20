import React from "react";
import imageacompanamiento from "../images/acompañamiento/acompañamiento.jpg";
import pregunta from "../images/acompañamiento/signo.jpg";
import axios from "axios";
import InicioSesion from "../pages/InicioSesion";
import Swal from "sweetalert2";

class Heroseccioncitas extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      form: {
        nombreUsuario: "",
        email: "",
        preguntas: "",
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
  //   const usuarioAutenticado = JSON.parse(localStorage.getItem("access_token"));
  //   if (usuarioAutenticado) {
  //     Swal.fire(
  //       'Su petición fue realizada con éxito, muy pronto nos comunicaremos contigo',
  //       'Has clic en el botón :)',
  //       'error'
  //     )
  //     // window.confirm("Su petición fue realizada con éxito, muy pronto nos comunicaremos contigo");
     
  // }   else {
  //   Swal.fire(
  //     'Para realizar la solicitud, debe iniciar sesión',
  //     'Has clic en el botón :)',
  //     'error'
  //   )
  //   // window.confirm("Para realizar la solicitud, debe iniciar sesión");
   
  // }

    if (usuarioAutenticado){
      const templateId = 'template_bYLUDNF1';
      this.sendFeedback(templateId, {message_html: this.state.form.preguntas, 
                                    from_name: this.state.form.nombreUsuario,
                                    reply_to: this.state.form.email})
    } else {
      Swal.fire(
        'Por favor inicia sesion para realizar tu solicitud',
        'Has clic en el botón :)',
        'error'
      )
      // alert("Por favor inicia sesion para realizar tu solicitud")
    }
};

sendFeedback (templateId, variables) {
  console.log(variables)
	window.emailjs.send(
  	'gmail', templateId,
    variables
  	).then(res => {
      alert("Solicitud enviada correctamente")
    	//console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

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
            <form>
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
            <input type="button" value="Solicitar cita" className="btn btn-orange font-weight-bold" onClick={this.handleSubmit} />
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
