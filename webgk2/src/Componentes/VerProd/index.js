//Dependencias
import React, { Component } from 'react';
//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class VerProd extends Component {
    render() {
        return(
            <div className="VerProd">
             <h1 className="labelP"> Listado de Productos </h1>
                 <label>
                    IdProducto: <input type="text" name="Identificador" id="idPro" />
                </label>
                <div>
                    <input type="submit" className="colorbtn" value="Buscar Producto" />
                </div>
                <br/>
                <br/>
                <Table  border="1">
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
            </div>
        );
    }
}

export default VerProd;