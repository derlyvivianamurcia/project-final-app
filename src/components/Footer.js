import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bgColor">
      <div className="row justify-content-center">
        <div className="icons text-center">
          <a href="" target="_blank">
            <i className="icono fab fa-instagram"></i>
          </a>
          <a href="" target="_blank">
            <i className="icono fab fa-facebook"></i>
          </a>
          <a href="" target="_blank">
            <i className="icono fab fa-twitter"></i>
          </a>
          <a href="#contacto">
            <i className="icono fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <span className="font-italic text-white">
          Copyright© | EduSkill especializada en educación PMR
        </span>
      </div>
    </footer>
  );
};

export default Footer;
