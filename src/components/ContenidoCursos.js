import React from "react";
import ProgramarHTMLyCSS from "../images/cursos/CómoProgramarHTMLyCSS.PNG";
import GanarConBitcoin from "../images/cursos/GanarConBitcoin.PNG";
import CursoFlexbox from "../images/cursos/CursoFlexbox.PNG";
import TradinAvanzado from "../images/cursos/TradinAvanzado.PNG";
import ComoProgramarJavaScript from "../images/cursos/CómoProgramarJavaScript.PNG";
import AprenderReactJS from "../images/cursos/AprenderReactJS.PNG";
import CursoExcel from "../images/cursos/CursoExcel.PNG";
import ClasesDeInglesBasico from "../images/cursos/ClasesDeInglésBásico.PNG";
import DeNovatoDesarrolladoExitoso from "../images/cursos/DeNovatoDesarrolladoExitoso.PNG";
import TarjetaCursos from "../components/TarjetaCursos";
import axios from "axios";

class ContenidoCursos extends React.Component {
  state = {
    cursos: [],
  };

  componentDidMount() {
    this.traerCursosDeApi();
  }

  traerCursosDeApi() {
    axios.get("http://localhost:3001/cursos").then((respuesta) => {
      console.log(respuesta.data);
      this.setState({ cursos: respuesta.data });
      console.log(this.state.cursos);
    });
  }

  render() {
    return (
      <div className="container marginTop">
        <div className="row">
          <TarjetaCursos EjemploDAlgoQueMando={this.state.cursos} />
        </div>
      </div>
    );
  }
}

export default ContenidoCursos;
