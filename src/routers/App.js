import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InicioSesion from "../pages/InicioSesion";
import Principal from "../pages/Principal";
import FormularioRegistro from "../pages/FormularioRegistro";
import Cursos from "../pages/Cursos";
import Acompanamiento from "../pages/Acompanamiento";
import Empleos from "../pages/Empleos";
import PlayCursos from "../components/PlayCursos";
import HojaDeVida from "../pages/EditarHojaDeVida";

import conAutenticacion from "../utils/autenticacion/conAutenticacion";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />

        <Route exact path="/inicioSesion" component={InicioSesion} />

        <Route
          exact
          path="/formularioRegistro"
          component={FormularioRegistro}
        />

        <Route exact path="/acompanamiento" component={Acompanamiento} />

        <Route exact path="/empleos" component={Empleos} />

        <Route
          exact
          path="/editarHojaDeVida"
          component={conAutenticacion(HojaDeVida)}
        />

        <Route exact path="/cursos" component={Cursos} />

        <Route path="/cursos/:id" component={conAutenticacion(PlayCursos)} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
