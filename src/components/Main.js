import React from 'react'
import { Link } from 'react-router-dom';

import MainPrincipal from './MainPrincipal';
import MainPrincipalBanner from './MainPrincipalBanner';




const Main = () => {
    return (
        <main>
         <MainPrincipalBanner />
            <div className="container">
                <div className="h1 mt-5 text-center"><span>¡Una vez estés registrado en nuestra plataforma podrás accerder de los siguientes beneficios!</span></div>
                <MainPrincipal />
            </div>
           
        </main>

    );
}
export default Main;
