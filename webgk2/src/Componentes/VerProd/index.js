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

        this.ManejadorCambioVP = this.ManejadorCambioVP.bind(this);
        this.ManejadorEliminar = this.ManejadorEliminar.bind(this);
    }

    ManejadorCambioVP(event) {
        this.setState({[event.target.id]: event.target.value});
      }

     ManejadorEliminar(event) {
         //Se elimina el dato del localstorage del ID ingresado
        debugger;
        var idG = this.state.idPro;
        var lista = [];
        lista = JSON.parse(localStorage.getItem("GKApp"));

        for(var i = 0; i < lista.length; i++){

            if(lista[i].idG === idG){
                lista.splice(i,idG);
                //alert('Se creo el producto:' + '\n' + lista[i].idG + '\n' + lista[i].nombre + '\n' + lista[i].talla + '\n' + lista[i].costo + '\n' + lista[i].Descripcion);
                break;
            }
        }
        lista = JSON.stringify(lista);
        localStorage.setItem('GKApp', lista);
        this.setState({ gklist: lista });
        event.preventDefault();
      }

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