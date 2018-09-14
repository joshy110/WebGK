//Dependencias
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

//Estilos y Componentes
import logo from './Imagenes/LogoBall.svg';
import './css/Header.css';

 class Header extends Component {
  //Objeto PropTipes
  static propTypes={
    title: Proptypes.string.isRequired,
    items: Proptypes.array.isRequired
  };
  render() {
    //Se obtiene los props
    const {title, items} = this.props;

     return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
          <ul>
            { 
              items && items.map(
                (item,key) => <li className="Lista" key={key}><Link className="Items" to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </header>
      </div>
    );
  }
}
 export default Header; 