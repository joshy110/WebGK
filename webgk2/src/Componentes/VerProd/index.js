//Dependencias
import React, { Component } from 'react';
//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import {FormControl} from 'react-bootstrap'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'



class VerProd extends Component {

    constructor(props) {
        super(props);
        //Lista
        this.state = {
            gklist: []
        };

        this.ManejadorCambioVP = this.ManejadorCambioVP.bind(this);
        this.ManejadorEliminar = this.ManejadorEliminar.bind(this);
        this.ManejadorActualizar = this.ManejadorActualizar.bind(this);
        //this.GuardarActualizar = this.GuardarActualizar.bind(this);
    }

        //Funcion que maneja los cambios de eventos
    //-----------------------------------------
    ManejadorCambioVP(event) {
        this.setState({[event.target.id]: event.target.value});
      }
/*--------------------------- ELIMINAR -----------------------------------------------*/
      //Funcion que realiza la eliminacion
      //-----------------------------------
      ManejadorEliminar(event,id) {

        //Se elimina el dato del localstorage del ID ingresado
       // var idG = this.state.idPro;
        var lista = [];
        var lista1 = [];
        var lista2 = [];
        if (id > 0) {

            lista = JSON.parse(localStorage.getItem("GKApp"));
            for (var i = 0; i < lista.length; i++) {

                if (lista[i].idG !== id) {
                    lista1.push(lista[i]);
                }
            }

            //Se parsea la lista y se agrega nuevamente al local storage
            lista1 = JSON.stringify(lista1);
            localStorage.setItem('GKApp', lista1);
            lista2 = JSON.parse(localStorage.getItem("GKApp"));
            //Se verifica que la lista se encuentre llena
            if (lista2.length === 0) {
                alert('No existen productos');
            }
            else {
                this.setState({ gklist: lista2 });
            }
            event.preventDefault();
        }
        else{
           alert('Ingrese un identificador valido');
        }
     }
/*-------------------------------------------------------------------------------*/
/*------------------------------ Modificar --------------------------------------*/
   ManejadorActualizar(event, id, nombre, talla, costo, desc) {
        this.state.idPro = id;
        this.state.nombrePro = nombre;
        this.state.tallaPro = talla;
        this.state.costoPro= costo;
        this.state.descPro = desc;
    }/*
    GuardarActualizar(event, id, nombre, talla, costo, desc){
        var lista = [];
        var lista1 = [];
        var lista2 = [];

        lista = JSON.parse(localStorage.getItem("GKApp"));

       for (var i = 0; i < lista.length; i++) {

            if (lista[i].idG === id) {
                lista[i].nombre = nombre;
                lista[i].talla = talla;
                lista[i].costo = costo;
                lista[i].Descripcion = desc;
            }
            lista1.push(lista[i]);
        }

        lista1 = JSON.stringify(lista1);
        localStorage.setItem('GKApp', lista1);
        lista2 = JSON.parse(localStorage.getItem("GKApp"));
        //Se verifica que la lista se encuentre llena
        if (lista2.length === 0) {
            alert('No existen productos');
        }
        else {
            this.setState({ gklist: lista2 });
        }
         //event.preventDefault();
    }*/
/*-------------------------------------------------------------------------------*/

    //Funcion que maneja la visualizacion de productos
    //-----------------------------------------
     componentDidMount() {//load the local storage data after the component renders
        var lista = [];

        if (typeof localStorage["GKApp"] !== "undefined") {
            lista = JSON.parse(localStorage.getItem("GKApp"));
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
             
                <form>
                    <div>
                        <label>
                            ID Producto: <input type="number" maxLength="6" name="Identificador" id="idPro" onChange={(event) => this.ManejadorCambioCr(event)} value={this.state.idPro} disabled/>
                        </label>
                        <label >
                            Nombre: <input type="text" name="Nombre" id="nombrePro" onChange={(event) => this.ManejadorCambioVP(event)} value={this.state.nombrePro} />
                        </label>
                        <label >
                            Talla: <input type="number" name="Talla" id="tallaPro" onChange={(event) => this.ManejadorCambioVP(event)} value={this.state.tallaPro} />
                        </label>
                        <label >
                            Costo: <input type="number" name="Costo" id="costoPro" onChange={(event) => this.ManejadorCambioVP(event)} value={this.state.costoPro} />
                        </label>
                        <label >
                            Descripcion: <textarea type="textarea" name="Descripcion" id="descPro" onChange={(event) => this.ManejadorCambioVP(event)} value={this.state.descPro} />
                        </label>
                    </div>

                    <br/>
                    <div>
                        <input type="submit" className="colorbtn" value="Guardar Cambios" />
                    </div>
                </form>
                <br/>
                <Table  border="1">
                    <Thead>
                        <Tr>
                            <Th>Id Producto</Th>
                            <Th>Nombre</Th>
                            <Th>Talla</Th>
                            <Th>Costo</Th>
                            <Th>Descripcion</Th>
                            <Th></Th> 
                            <Th></Th> 
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
                                <td>
                                    <input type="submit" className="colorbtn" value="Modificar Producto" 
                                    onClick={(event) => this.ManejadorActualizar(event,Guantes.idG, Guantes.nombre, Guantes.talla, Guantes.costo, Guantes.Descripcion)} />
                                </td>
                                <td>
                                    <input type="submit" className="colorbtn" value="Eliminar Producto" onClick={(event) => this.ManejadorEliminar(event,Guantes.idG)} />
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