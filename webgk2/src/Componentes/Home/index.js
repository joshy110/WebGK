//Dependencias
import React, { Component } from 'react';

//Estilos, Componentes e Imagenes
import logoInicio from './LogoIndex.jpg';
import './inicio.css'

class Home extends Component {
    render() {
        return(
            <div className="Home">
                <img className="imagenP img-responsive" src={logoInicio} alt="logoInicio" />
                <h2 className="textoPImagenP">
                    <span className="labelP">"Si no hubiera sido futbolista habría sido peor persona" - Gianguili Buffon</span>
                </h2>
                <div>
                    <p className="TextoInicio">
                        Nosotros somos una organización que surge en el año 2018 con el objetivo de informar a todas aquellas personas que tienen poco conocimiento lo que conlleva ser portero, los sacrificios que se hacen y los arduos entrenamientos que se llevan a cabo pero sobre todo lo bien que se la pasa siendo portero.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;