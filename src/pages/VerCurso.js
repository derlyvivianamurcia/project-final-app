import React from "react";
import PlayCursos from "../components/PlayCursos";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ParticleComponent from "../components/ParticleComponent";

class VerCurso extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="particles-js">
          <ParticleComponent />
        </div>
        <PlayCursos />
        <Footer />
      </div>
    );
  }
}

export default VerCurso;
