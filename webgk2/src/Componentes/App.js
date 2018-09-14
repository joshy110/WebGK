//Dependencias
import React, { Component } from 'react';

//Estilos
import './Global/css/App.css';

//Componentes
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

//Datos
import items from '../data/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header title="La web del arquero" items={items} />
          <Content />
          <Footer />
      </div>
    );
  }
}

export default App;
