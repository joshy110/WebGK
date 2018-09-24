//Dependencias
import React, { Component } from 'react';
//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


class Crear extends Component {

    //Formulario Controlado
    constructor(props) {
        super(props);
        //Lista
        this.state = {
            gklist: []
        };  
    
        this.ManejadorCambioCr = this.ManejadorCambioCr.bind(this);
        this.ManejadorCrear = this.ManejadorCrear.bind(this);
      }
    
      ManejadorCambioCr(event) {
        this.setState({[event.target.id]: event.target.value});
      }
    
      ManejadorCrear(event) {
        var idG = this.state.idPro;
        var nombre = this.state.nombrePro;
        var talla = this.state.tallaPro;
        var costo = this.state.costoPro;
        var Descripcion = this.state.descPro;

        /*Se procede a agregar al local storage:
        1. Se realiza el json
        2. Se lee el local storage
        3. Se valida si trae algo o no
        4. Si trae algo se decodifica, si no trae nada se crea la lista
        5. Se agrega el elemnto al principio de la lista
        6. Se codifica la cadena
        7. Se agrega al local Storage
        8. Se notifica que se creo el producto*/
        var producto = {
            idG: idG,
            nombre: nombre,
            talla: talla,
            costo: costo,
            Descripcion: Descripcion,
        }

        var productos = localStorage.getItem('GKApp');

        if (productos === null) {
            productos = [];
        }
        else {
            productos = JSON.parse(productos);
        }

        productos.unshift(producto);
        productos = JSON.stringify(productos);
        localStorage.setItem('GKApp', productos);
        alert('Se creo el producto:' + '\n' + idG + '\n' + nombre + '\n' + talla + '\n' + costo + '\n' + Descripcion);
        event.preventDefault();
      }

    render() {
        return (
            <div >

                <h1 className="labelP"> Creacion de Productos </h1>

                <form onSubmit={this.ManejadorCrear}>
                    <div>
                        <label>
                            IdProducto: <input type="text" name="Identificador" id="idPro" onChange={(event) => this.ManejadorCambioCr(event)} value={this.state.idPro}  />
                        </label>
                        <br />
                        <br />
                        <label >
                            Nombre: <input type="text" name="Nombre" id="nombrePro" onChange={(event) => this.ManejadorCambioCr(event)} value={this.state.nombrePro}  />
                        </label>
                        <br />
                        <br />
                        <label >
                            Talla: <input type="text" name="Talla" id="tallaPro" onChange={(event) => this.ManejadorCambioCr(event)} value={this.state.tallaPro}  />
                        </label>
                        <br />
                        <br />
                        <label >
                            Costo: <input type="text" name="Costo" id="costoPro" onChange={(event) => this.ManejadorCambioCr(event)} value={this.state.costoPro} />
                        </label>
                        <br />
                        <br />
                        <label >
                            Descripcion: <textarea type="textarea" name="Descripcion" id="descPro" onChange={(event) => this.ManejadorCambioCr(event)} value={this.state.descPro} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" className="colorbtn" value="Crear Producto" />
                    </div>
                </form>
                <br/>
            </div>
        );
    }
}

export default Crear;