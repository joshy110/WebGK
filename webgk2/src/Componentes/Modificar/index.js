//Dependencias
import React, { Component } from 'react';
//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class Modificar extends Component {
    //Formulario Controlado
    constructor(props) {
        super(props);
        //Lista
        this.state = {
            gklist: []
        };  
    
        this.ManejadorCambioMod = this.ManejadorCambioMod.bind(this);
        this.ManejadorModi = this.ManejadorModi.bind(this);
      }
    
      ManejadorCambioMod(event) {
        this.setState({[event.target.id]: event.target.value});
      }
    
      ManejadorModi(event) {
        alert('Se creo el producto:'+ '\n' + this.state.idProm + '\n'+ this.state.nombrePro +'\n'+ this.state.tallaPro + '\n' +this.state.costoPro + '\n' + this.state.descPro);
        event.preventDefault();
      }
    render() {
        return(
            <div className="Modificar">
            <h1 className="labelP"> Modificaion de Productos </h1>
                 <form onSubmit={this.ConsultarModif}>
                    <label>
                        IdProducto: <input type="text" name="Identificador" id="idPro" onChange={(event) => this.ManejadorCambioMod(event)} value={this.state.idPro} />
                    </label>
                    <div>
                        <input type="submit" className="colorbtn" value="Consultar Producto" />
                    </div>
                    <br />
                </form>
                <br/>
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
                <form onSubmit={this.ManejadorModif}>
                    <div>
                        <label>
                            IdProducto: <input type="text" name="Identificador" id="idProm" onChange={(event) => this.ManejadorCambioMod(event)} value={this.state.idProm} />
                        </label>
                        <br />
                        <br />
                        <label >
                            Nombre: <input type="text" name="Nombre" id="nombrePro" onChange={(event) => this.ManejadorCambioMod(event)} value={this.state.nombrePro} />
                        </label>
                        <br />
                        <br />
                        <label >
                            Talla: <input type="text" name="Talla" id="tallaPro" onChange={(event) => this.ManejadorCambioMod(event)} value={this.state.tallaPro} />
                        </label>
                        <br />
                        <br />
                        <label >
                            Costo: <input type="text" name="Costo" id="costoPro" onChange={(event) => this.ManejadorCambioMod(event)} value={this.state.costoPro} />
                        </label>
                        <br />
                        <br />
                        <label >
                            Descripcion: <textarea type="textarea" name="Descripcion" id="descPro" onChange={(event) => this.ManejadorCambioMod(event)} value={this.state.descPro} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" className="colorbtn" value="Crear Producto" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Modificar;