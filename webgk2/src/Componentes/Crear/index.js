//Dependencias
import React, { Component } from 'react';
//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


var cel = {
    "name": "Iphone X",
    "panta": 6.1,
    "memo": "64GB y 256GB",
    "bat": "3000mhA",
    "ram": "2GB"
}
var celJSON = JSON.stringify(cel);
localStorage.setItem("game", celJSON);


var celJSON = JSON.stringify(cel);
localStorage.setItem("game", celJSON);
/*

//Despues del render colocar
var celJSON = localStorage.getItem("game");
    var game = JSON.parse(celJSON)
        */

class Crear extends Component {

    //Formulario Controlado
    constructor(props) {
        super(props);
        this.idco = {value: ''};
        this.idcr = {value: ''};
        this.nombre = {value: ''};
        this.talla = {value: ''};
        this.costo = {value: ''};
        this.desc = {value: ''};
    
        this.ManejadorCambioCr = this.ManejadorCambioCr.bind(this);
        this.ManejadorCrear = this.ManejadorCrear.bind(this);
        this.ConsultorCreacion = this.ConsultorCreacion.bind(this);
      }
    
      ManejadorCambioCr(event) {
        this.setState({value: event.target.value});
      }
    
      ManejadorCrear(event) {
        alert('Se creo el producto:'+ '\n' + this.idcr.value + '\n'+ this.nombre.value +'\n'+ this.talla.value + '\n' + this.costo.value + '\n' + this.desc.value);
        event.preventDefault();
      }

      ConsultorCreacion(event) {
        alert('Se consulta el producto:' + '\n' + + this.idco.value + '\n' + 'Producto no existe, Cree uno nuevo');
        event.preventDefault();
      }

    render() {
        return (
            <div >

                <h1 className="labelP"> Creacion de Productos </h1>
                <form onSubmit={this.ConsultorCreacion}>
                    <label>
                        IdProducto: <input type="text" name="Identificador" id="idPro" value={this.idco.value = '12345'} readOnly />
                    </label>
                    <div>
                        <input type="submit" className="colorbtn" value="Consultar Producto" />
                    </div>
                    <br />
                </form>



                <form onSubmit={this.ManejadorCrear}>
                    <div>
                        <label>
                            IdProducto: <input type="text" name="Identificador" id="idPro" value={this.idcr.value = '12345'} readOnly />
                        </label>
                        <br />
                        <br />
                        <label >
                            Nombre: <input type="text" name="Nombre" id="nombrePro" value={this.nombre.value = 'Rinat F150'} readOnly />
                        </label>
                        <br />
                        <br />
                        <label >
                            Talla: <input type="text" name="Talla" id="tallaPro" value={this.talla.value = '10'} readOnly />
                        </label>
                        <br />
                        <br />
                        <label >
                            Costo: <input type="text" name="Costo" id="costoPro" value={this.costo.value = '315'} readOnly />
                        </label>
                        <br />
                        <br />
                        <label >
                            Descripcion: <textarea type="textarea" name="Descripcion" id="descPro" value={this.desc.value = 'Es color negro con tiras amarillentas'} readOnly />
                        </label>
                    </div>
                    <div>
                        <input type="submit" className="colorbtn" value="Crear Producto" />
                    </div>
                </form>
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

            </div>
        );
    }
}

export default Crear;