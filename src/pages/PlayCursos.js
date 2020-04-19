import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import ParticleComponent from "../components/ParticleComponent";
import Footer from "../components/Footer";

import ReactPlayer from "react-player";

class PlayCursos extends React.Component {
  state = {
    curso: {},
  };

  async componentDidMount() {
    console.log("**", this.props);
    const {
      match: { params },
    } = this.props;
    const { data } = await axios.get(
      `http://localhost:3001/cursos/${params.id}`
    );
    this.setState({
      curso: data,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="particles-js">
          <ParticleComponent />
        </div>
        <div className="container">
          <div className="row marginTop">
            <div className="col colorTextAzul text-center">
              <h2>{`Bienvenido al curso: ${this.state.curso.nombreCurso}`}</h2>
            </div>
          </div>
          <div className="row marginTop">
            <div className="col-1"> </div>
            <div className=" col-10 embed-responsive video ">
              <ReactPlayer
                url={`${this.state.curso.video}`}
                className="react-player"
                playing
              />
            </div>
            <div className="col-1"> </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(PlayCursos);
