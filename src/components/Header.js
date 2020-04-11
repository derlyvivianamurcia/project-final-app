import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Navbar'
import Footer from './Footer';



function Header() {
    return (
        <div className="container-fluid colorbg">
           <Nav />
           <Footer />    
        </div>

    );
}
export default Header;
