import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Navbar'
import Footer from './Footer';
import MainPrincipal from './MainPrincipal';



function Header() {
    return (
        <header className="colorbg">
           <Nav />
           <MainPrincipal/>
           <Footer />    
        </header>

    );
}
export default Header;
