import React from 'react'

class Citas extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        tel: "",
        email: "",
        question: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        name: event.target.name,
        tel: event.target.tel,
        email: event.target.email,
        question: event.target.question,
      });
      
    }
  
    handleSubmit(event) {
    console.log(event)
    Swal.fire(
      'Tus datos se han enviado muy pronto nos comunicaremos contigo',
      'Has clic en el botón :)',
      'error' + this.state.value
    )

      // alert(
      //   "Tus datos se han enviado muy pronto nos comunicaremos contigo " +
      //     this.state.value
          
      // );
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div className="form-group mt-3">
          <label htmlForm="name" className="label">
            Nombre:
            <input
              className="form-control"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label className="label">
            Número de celular:
            <input
              className="form-control"
              type="tel"
              value={this.state.tel}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label className="label">
            Email
            <input
              className="form-control"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="En este espacio usted puede hacer una pregunta al especialista"
            value={this.state.qestion}
            onChange={this.handleChange}
            cols="40"
            rows="10"
          ></textarea>
        </div>
        <div className="form-group d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-primary">
            Solicitar cita
          </button>
        </div>
      </form>
      )
    }

}
export default Citas