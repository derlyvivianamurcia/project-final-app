import React from "react";
import Login from "../../pages/InicioSesion";

function conAutenticacion(Component) {
  return () => {
    const token = localStorage.getItem("access_token");

    return token ? <Component /> : <Login />;
  };
}

export default conAutenticacion;