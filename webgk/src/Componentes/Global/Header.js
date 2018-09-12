import React, { Component } from 'react';
import logo from './Imagenes/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Hola Mundo React</h1>
        </header>
      </div>
    );
  }
}

export default Header;