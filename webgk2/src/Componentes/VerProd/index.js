//Dependencias
import React, { Component } from 'react';
//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
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
    }

/*--------------------------- ELIMINAR -----------------------------------------------*/
    //Funcion que maneja los cambios de eventos
    //-----------------------------------------
    ManejadorCambioVP(event) {
        this.setState({[event.target.id]: event.target.value});
      }

      //Funcion que realiza la eliminacion
      //-----------------------------------
     ManejadorEliminar(event) {
         //Se elimina el dato del localstorage del ID ingresado
        debugger;
        var idG = this.state.idPro;
        var lista = [];
        var lista1 = [];
        var lista2 = [];
        lista = JSON.parse(localStorage.getItem("GKApp"));

        for(var i = 0; i < lista.length; i++){

            if(lista[i].idG !== idG){
                lista1.push(lista[i]);
            }
        }

        //Se parsea la lista y se agrega nuevamente al local storage
        lista1 = JSON.stringify(lista1);
        localStorage.setItem('GKApp', lista1);
        lista2 = JSON.parse(localStorage.getItem("GKApp"));
        //Se verifica que la lista se encuentre llena
        if(lista2.length === 0){
            alert('No existen productos');
        }
        else{
            this.setState({ gklist: lista2 });
        }
        event.preventDefault();
      }
/*-------------------------------------------------------------------------------*/
/*------------------------------ Modificar --------------------------------------*/
    updateInput(key, value) {
        // update react state
        this.setState({ [key]: value });
    }
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
                 <label>
                    Identificar del Producto: <input type="text" name="Identificador" id="idPro" onChange={(event) => this.ManejadorCambioVP(event)} value={this.state.idPro}/>
                </label>
                <div>
                    <input type="submit" className="colorbtn" value="Buscar Producto" />
                    <input type="submit" className="colorbtn" value="Eliminar Producto" onClick={this.ManejadorEliminar} />
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
                                    <input type="submit" className="colorbtn" value="Modificar Producto" />
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