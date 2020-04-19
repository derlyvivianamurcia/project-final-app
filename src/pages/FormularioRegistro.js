import React from "react";
import HeaderSimple from "../components/HeaderSimple";
import MainFormularioRegistro from "../components/MainFormularioRegistro";
import Footer from "../components/Footer";

const FormularioRegistro = () => {
  const token = localStorage.getItem("access_token");

  if (token) return (window.location = "/");

  return (
    <>
      <HeaderSimple />
      <MainFormularioRegistro />
      <Footer />
    </>
  );
};

export default FormularioRegistro;
