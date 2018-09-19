//Dependencias
import React, { Component } from 'react';
//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


import {Col} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';


class Eliminar extends Component {

    //Formulario Controlado
    constructor(props) {
        super(props);
        //Lista
        this.state = {
            gklist: []
        };  
    
        this.ManejadorCambioEli = this.ManejadorCambioEli.bind(this);
        this.ManejadorEliminar = this.ManejadorEliminar.bind(this);
      }
    
      ManejadorCambioEli(event) {
        this.setState({[event.target.id]: event.target.value});
      }
    
      ManejadorEliminar(event) {
        alert('Se creo el producto:'+ '\n' + this.state.idProm + '\n'+ this.state.nombrePro +'\n'+ this.state.tallaPro + '\n' +this.state.costoPro + '\n' + this.state.descPro);
        event.preventDefault();
      }

    render() {

        return(
            <div className="Eliminar">
                <h1 className="labelP"> Eliminacio de Productos </h1>
                <div>
                    <form onSubmit={this.ConsultarModif}>
                        <label>
                            IdProducto: <input type="text" name="Identificador" id="idPro" onChange={(event) => this.ManejadorCambioEli(event)} value={this.state.idPro} />
                        </label>
                        <div>
                            <input type="submit" className="colorbtn" value="Consultar Producto" />
                        </div>
                        <br />
                    </form>
                    <br />
                    <br/>
                    <Table border="1">
                        <Thead>
                            <Tr>
                                <Th>Id Producto</Th>
                                <Th>Nombre</Th>
                                <Th>Talla</Th>
                                <Th>Cotso</Th>
                                <Th>Descripcion</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>12345</Td>
                                <Td>Rinat F150</Td>
                                <Td>10</Td>
                                <Td>315</Td>
                                <Td>Es color negro con tiras amarillentas</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <br />
                    <br />
                    <form onSubmit={this.ManejadorElimi}>
                        <div>
                            <input type="submit" className="colorbtn" value="Eliminar Producto" />
                        </div>
                        <br />
                    </form>
                </div>
            </div>
        );
    }
}

export default Eliminar;