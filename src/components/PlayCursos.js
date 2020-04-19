import React from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios'
class PlayCursos extends React.Component {

  state = {
    curso: {}
  }

  async componentDidMount () {
    console.log('**', this.props)
    const { match: { params } } = this.props;
    const { data } = await axios.get(`http://localhost:3001/cursos/${params.id}`)
    this.setState({
      curso: data
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row marginTop">
          <div className="col">
            <h2>{`Bienvenido al curso ${this.state.curso.nombreCurso}`}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlayCursos);
