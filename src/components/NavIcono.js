import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import "../Style/all_app.css";

const NavIcono = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <img
                        src={logo}
                        className="rounded-circle z-depth-0"
                        alt="avatar image"
                        height="60"
                    />
                </div>
            </nav>
        </header>
    );
};

export default NavIcono;
