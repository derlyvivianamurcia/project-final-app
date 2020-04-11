import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InicioSesion from '../pages/InicioSesion';
import Principal from '../pages/Principal';
import FormularioRegistro from '../pages/FormularioRegistro';
import Acompanamiento from '../pages/Acompanamiento'

const App = () => {
  return (

      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Principal} />
              <Route path='/InicioSesion' component={InicioSesion} />
              <Route path='/FormularioRegistro' component={FormularioRegistro} />
              <Route path='/Acompanamiento' component={Acompanamiento} />
          </Switch>
      </BrowserRouter>
  );
}


export default App;