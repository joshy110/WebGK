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
        this.GuardarActualizar = this.GuardarActualizar.bind(this);
    }

        //Funcion que maneja los cambios de eventos
    //-----------------------------------------
    ManejadorCambioVP(event) {
        this.setState({[event.target.id]: event.target.value});
      }
/*--------------------------- ELIMINAR -----------------------------------------------*/
    async ManejadorEliminar(id) {
        const response = await fetch('http://localhost:3002/implementos', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id:id})
        });
        this.componentDidMount();
      }
/*-------------------------------------------------------------------------------*/
/*------------------------------ Modificar --------------------------------------*/
   ManejadorActualizar(event, id, nombre, talla, costo, desc) {
        this.state.idPro = id;
        this.state.nombrePro = nombre;
        this.state.tallaPro = talla;
        this.state.costoPro= costo;
        this.state.descPro = desc;
        this.setState({[event.target.id]: event.target.value});
    }

    async GuardarActualizar(id) {
        try {
            var id = id;
            var n = this.state.nombrePro;
            var t = this.state.tallaPro;
            var c = this.state.costoPro;
            var d = this.state.descPro;

            var productos = {
                id: id,
                nombre: n,
                talla: t,
                costo: c,
                Descripcion: d
            };

          const response = await fetch('http://localhost:3002/implementos', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(productos)
          });
          this.componentDidMount();
        } 
        catch (error) {
          console.log(error);
        }
      }
/*-------------------------------------------------------------------------------*/

     /*------------------- GET ALL ------------------------------------------ */
     async componentDidMount(){
        try {
          const response = await fetch('http://localhost:3002/implementos');
          const lista = await response.json();
          this.setState({ gklist: lista.implementosgk });
        } 
        catch (error) {
          console.log(error);
        }
      }
    /*--------------------------------------------------------- */

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
                        <input type="submit" className="colorbtn" value="Guardar Cambios" onClick={() => this.GuardarActualizar(this.state.idPro)} />
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

                        {Guantes.map((Guantes, id) => (
                            <tr key={id}>
                                <td>
                                    {Guantes.id}
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
                                    onClick={(event) => this.ManejadorActualizar(event,Guantes.id, Guantes.nombre, Guantes.talla, Guantes.costo, Guantes.Descripcion)} />
                                </td>
                                <td>
                                    <input type="submit" className="colorbtn" value="Eliminar Producto" onClick={(event) => this.ManejadorEliminar(Guantes.id)} />
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