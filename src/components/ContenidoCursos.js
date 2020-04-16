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
  /*   InformacionCurso = [
    {
      id: "1",
      imagen: ProgramarHTMLyCSS,
      nombreCurso: "Cómo programar para Emprendedores - HTML y CSS",
      profesor: "Pablo Farias Navarro",
      duracion: "8 h 40 min de vídeo bajo demanda",
    },
    {
      id: "2",
      imagen: GanarConBitcoin,
      nombreCurso: "Empieza a ganar dinero con Bitcoin y otras Criptomonedas",
      profesor: "Biel Tenias",
      duracion: "1 h 9 min de vídeo bajo demanda",
    },
    {
      id: "3",
      imagen: ComoProgramarJavaScript,
      nombreCurso: "Cómo programar para Emprendedores - JavaScript",
      profesor: "Pablo Farias Navarro",
      duracion: "13 h 30 min de vídeo bajo demanda",
    },
    {
      id: "4",
      imagen: TradinAvanzado,
      nombreCurso: "Tradin Avanzado",
      profesor: "Castrillejo Pintor",
      duracion: "3 h 20 min de vídeo bajo demanda",
    },
    {
      id: "5",
      imagen: CursoFlexbox,
      nombreCurso: "Curso de Flexbox desde 0",
      profesor: "Erick Mines",
      duracion: "5 h de vídeo bajo demanda",
    },
    {
      id: "6",
      imagen: AprenderReactJS,
      nombreCurso: "Aprender React JS",
      profesor: "Miguel Durán García",
      duracion: "21 h de vídeo bajo demanda",
    },
    {
      id: "7",
      imagen: CursoExcel,
      nombreCurso: "Curso Excel de Tablas Dinámicas",
      profesor: "Javier Gómez",
      duracion: "1 h 40 min de vídeo bajo demanda",
    },
    {
      id: "8",
      imagen: ClasesDeInglesBasico,
      nombreCurso: "Clases de Inglés Básico",
      profesor: "Luis David Hernández",
      duracion: "5 h 22 min de vídeo bajo demanda",
    },
    {
      id: "9",
      imagen: DeNovatoDesarrolladoExitoso,
      nombreCurso: "De Novato a Desarrollador Exitoso",
      profesor: "Julio Liarte",
      duracion: "6 h 12 min de vídeo bajo demanda",
    },
  ]; */

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
