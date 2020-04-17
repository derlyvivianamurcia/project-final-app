import React from "react";
import TarjetaCursos from "../components/TarjetaCursos";

class ContenidoCursos extends React.Component {
  render() {
    return (
      <div className="container marginTop">
        <div className="row">
          <TarjetaCursos EjemploDAlgoQueMando={this.props.cursosConsultados} />
        </div>
      </div>
    );
  }
}

export default ContenidoCursos;
