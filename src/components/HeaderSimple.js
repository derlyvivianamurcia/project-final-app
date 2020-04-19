import React from "react";
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";

class HeaderSimple extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link to="/">
              <img
                src={logo}
                className="rounded-circle z-depth-0"
                alt=""
                height="60"
              />
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderSimple;
