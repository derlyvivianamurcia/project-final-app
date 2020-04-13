import React from "react";
import Header from "../components/Header";
import ParticleComponent from "../components/ParticleComponent";
import MainPrincipalBanner from "../components/MainPrincipalBanner";
import MainPrincipalBody from "../components/MainPrincipal";
import Footer from "../components/Footer";

const Principal = () => {
  return (
    <>
      <Header />
      <div className="particles-js">
        <ParticleComponent />
        <MainPrincipalBanner />
      </div>
      <MainPrincipalBody />
      <Footer />
    </>
  );
};

export default Principal;
