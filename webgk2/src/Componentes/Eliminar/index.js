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
        this.idco = { value: '' };
        this.idcr = { value: '' };
        this.nombre = { value: '' };
        this.talla = { value: '' };
        this.costo = { value: '' };
        this.desc = { value: '' };

        this.ManejadorCambioCr = this.ManejadorCambioCr.bind(this);
        this.ManejadorElimi = this.ManejadorElimi.bind(this);
        this.ConsultaElimi = this.ConsultaElimi.bind(this);
    }

    ManejadorCambioCr(event) {
        this.setState({ value: event.target.value });
    }

    ManejadorElimi(event) {
        alert('Producto Eliminado');
        event.preventDefault();
    }

    ConsultaElimi(event) {
        alert('Se consulta el producto:' + '\n' + + this.idco.value + '\n' + 'Producto existente');
        event.preventDefault();
    }

    render() {

        return(
            <div className="Eliminar">
                <h1 className="labelP"> Eliminacio de Productos </h1>
                <div>
                    <form onSubmit={this.ConsultaElimi}>
                        <label>
                            IdProducto: <input type="text" name="Identificador" id="idPro" value={this.idco.value = '12345'} readOnly />
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