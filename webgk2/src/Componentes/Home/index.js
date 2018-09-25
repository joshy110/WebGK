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
            </div>
        );
    }
}

export default Home;