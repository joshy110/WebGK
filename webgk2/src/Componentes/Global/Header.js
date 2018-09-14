import React, { Component } from 'react';
import logo from './Imagenes/LogoBall.svg';
import './css/Header.css';
import Proptypes from 'prop-types';

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
            { items && items.map((item,key) => <li className="Lista" key={key}>{item.title}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}
 export default Header; 