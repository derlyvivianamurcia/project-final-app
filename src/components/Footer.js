import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bgColor">
      <div className="row justify-content-center">
        <a className="nav-link" target="_blanck" href="https://twitter.com/">
          <img src="https://img.icons8.com/nolan/64/twitter.png" />
        </a>
        <a
          className="nav-link"
          href="https://www.instagram.com/"
          target="_blanck"
        >
          <img src="https://img.icons8.com/nolan/64/instagram-new.png" />
        </a>
        <a
          className="nav-link"
          href="https://www.linkedin.com/"
          target="_blanck"
        >
          <img src="https://img.icons8.com/nolan/64/linkedin.png" />
        </a>
      </div>
      <div className="row d-flex justify-content-center">
        <span className="font-italic">
          Copyright© | EduSkill especializada en educación PMR{" "}
        </span>
      </div>
    </footer>
  );
};
export default Footer;
