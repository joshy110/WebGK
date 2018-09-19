//Dependencias
import React, { Component } from 'react';
//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


var producto = localStorage.getItem("GKApp");
var GKArreglo = JSON.parse(producto);

class VerProd extends Component {

    constructor(props) {
        super(props);
        //Lista
        this.state = {
            gklist: []
        };
    }

    componentDidMount() {//load the local storage data after the component renders
        var lista = []

        if (typeof localStorage["Heroes"] !== "undefined") {
            lista = JSON.parse(localStorage.getItem("Heroes"));
        }
        else {

            lista = JSON.parse(localStorage.getItem("GKApp"));
        }

        this.setState({ gklist: lista });
    }

    render() {
        const Guantes = this.state.gklist;
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
                            <Th>Costo</Th>
                            <Th>Descripcion</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {Guantes.map((Guantes, idG) => (
                            <tr key={idG}>
                                <td>
                                    {Guantes.idG}
                                </td>
                                <td>
                                    {Guantes.nombre}
                                </td>
                                <td>
                                    {Guantes.talla}
                                </td>
                                <td>
                                    {Guantes.costo}
                                </td>
                                <td>
                                    {Guantes.Descripcion}
                                </td>
                            </tr>

                        ))}



                    </Tbody>
                </Table>
            </div>
        );
    }
}

export default VerProd;