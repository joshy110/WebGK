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
        alert('Se creo el producto:'+ '\n' + this.state.idPro + '\n'+ this.state.nombrePro +'\n'+ this.state.tallaPro + '\n' +this.state.costoPro + '\n' + this.state.descPro);
        event.preventDefault();
      }

      componentDidMount(){
            var tempo = [];

            if (typeof localStorage["GKApp"] !== "undefined"){
                tempo = JSON.parse(localStorage.getItem("GKApp"));
            }
            else{
                localStorage.setItem("GKApp", JSON.stringify([
                    {idG: 1, nombre: "Rinat F150", talla: "10", costo: "315", Descripcion: "Prueba1"},
                    {idG: 2, nombre: "Rinat F130", talla: "9", costo: "215", Descripcion: "Prueba2"},
                    {idG: 3, nombre: "Rinat F140", talla: "8", costo: "715", Descripcion: "Prueba3"},
                    {idG: 4, nombre: "Rinat F160", talla: "7", costo: "415", Descripcion: "Prueba4"}
                ]));
                tempo = JSON.parse(localStorage.getItem("GKApp"));
            }
            this.setState({gkprodu:tempo});
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