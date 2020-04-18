import React from "react";
import ParticleComponent from "../components/ParticleComponent";
import Footer from "../components/Footer";
import HojaVida from "../components/HojaVida";

class PageHojaVida extends React.Component {
    render() {
        return (
            <div>
                <div className="particles-js">
                    <ParticleComponent />
                </div>
                <HojaVida />
                <div></div>
                <Footer />
            </div>
        );
    }
}

export default PageHojaVida;
