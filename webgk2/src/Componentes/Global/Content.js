//Dependencias
import React, { Component } from 'react';
import './css/Content.css';
import Proptypes from 'prop-types';


class Content extends Component {
  //Objeto PropTipes
  static propTypes={
    body: Proptypes.object.isRequired
  };

  render() {
    const { body } = this.props;
    return (
      <div className="Content">
          {body}
      </div>
    );
  }
}

export default Content;