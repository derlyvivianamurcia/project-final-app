import React from 'react'
import MainInicioSesion from '../components/MainInicioSesion'
import ParticleComponent from '../components/ParticleComponent'
import Footer from '../components/Footer'

class InicioSesion extends React.Component {
  render() {
    return (
      <div>
        <div className="particles-js">
          <ParticleComponent />
        </div>
        <MainInicioSesion />
        <div></div>
        <Footer />
      </div>
    )
  }
}

export default InicioSesion
