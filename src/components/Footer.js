import React from 'react';
import logo from '../images/Logo.png'

const Footer = () => {


    return (
        <footer className="container-fluid bg-light">
            <nav className="d-flex justify-content-center">
                <ul className="navbar sticky-top navbar-light">
                    <a className="nav-link anime" href="#"> <img src="https://img.icons8.com/nolan/64/twitter.png" /></a>
                    <a className="nav-link" href="#">  <img src="https://img.icons8.com/nolan/64/instagram-new.png" /></a>
                    <a className="nav-link" href="#">  <img src="https://img.icons8.com/nolan/64/linkedin.png" /></a>
                </ul>
            </nav>
            <div className="d-flex justify-content-center">
                <span className="font-italic">Copyright©  | EduSkill especializada en educación PMR  </span>
            </div>
        </footer>
    )
}
export default Footer