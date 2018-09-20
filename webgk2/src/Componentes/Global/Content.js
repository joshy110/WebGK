//Dependencias
import React, { Component } from 'react';
import './css/Content.css';
import Proptypes from 'prop-types';

//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


class Content extends Component {
  //Objeto PropTipes
  static propTypes={
    body: Proptypes.object.isRequired
  };

  render() {
    return (
      <div className="Content">
          {this.props.children}
      </div>
    );
  }
}

export default Content;