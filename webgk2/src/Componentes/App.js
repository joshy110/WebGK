//Dependencias
import React, { Component } from 'react';
import Proptypes from 'prop-types';

//Estilos
import './Global/css/App.css';

//Componentes
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

//Datos
import items from '../data/menu'

class App extends Component {
  //Objeto PropTipes
  static propTypes={
    children: Proptypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
          <Header title="La web del arquero" items={items} />
          <Content>
            {children}
            </Content>
          <Footer />
      </div>
    );
  }
}

export default App;
