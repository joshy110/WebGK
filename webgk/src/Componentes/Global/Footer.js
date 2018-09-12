import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer>
            <div className="row">
                <div className="ff col-xs-12 col-sm-6 col-md-3">
                    <h4><b>Contactenos:</b></h4>
                    <p>
                        arqinfoweb@gmail.com
                    </p>
                </div>
                <div className="ff col-xs-12 col-sm-6 col-md-3">
                    <h4><b>Encuentranos:</b></h4>
                    <p>
                        1era avenida 9 - 14 zona 9, Ciudad de Guatemala
                    </p>
                </div>
                <div className="ff col-xs-12 col-sm-6 col-md-3">
                    <h4><b>Creado por:</b></h4>
                    <p>
                        2018 by ArquerosORG - Josue Cabrera Morales
                    </p>
                </div>
                <div className="ff col-xs-12 col-sm-6 col-md-3">
                    <h4><b>Contactanos:</b></h4>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default Footer;