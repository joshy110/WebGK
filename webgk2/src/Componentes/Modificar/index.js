//Dependencias
import React, { Component } from 'react';
//Tabla Responsive
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class Modificar extends Component {
    render() {
        return(
            <div className="Modificar">
                 <label>
                    IdProducto: <input type="text" name="Identificador" id="idPro" />
                </label>
                <div>
                    <input type="submit" class="colorbtn" value="Consultar Producto" />
                </div>
                <br/>
                <br/>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Id Producto</Th>
                            <Th>Imagen</Th>
                            <Th>Nombre</Th>
                            <Th>Talla</Th>
                            <Th>Cotso</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>31</Td>
                            <Td>2017</Td>
                            <Td>Alabama Community College System (ACCS)</Td>
                            <Td>Mr. Toner Evans, Samford University</Td>
                            <Td>Ms. Kelly Birchfield, Auburn University Montgomery</Td>
                        </Tr>
                        <Tr>
                            <Td>30</Td>
                            <Td>2016</Td>
                            <Td>Samford University</Td>
                            <Td>Ms. Angel Jowers, University of West Alabama</Td>
                            <Td>Mr. Toner Evans, Samford University</Td>
                        </Tr>
                        <Tr>
                            <Td>29</Td>
                            <Td>2015</Td>
                            <Td>Eufaula (Wallace Community College Dothan)</Td>
                            <Td>Dr. Annette Cederholm, Snead State Community College</Td>
                            <Td>Ms. Angel Jowers, University of West Alabama</Td>
                        </Tr>
                        <Tr>
                            <Td>28</Td>
                            <Td>2014</Td>
                            <Td>Huntsville (J.F. Drake State Community and Technical College)</Td>
                            <Td>Dr. Jon C. Acker, The University of Alabama</Td>
                            <Td>Dr. Annette Cederholm, Snead State Community College</Td>
                        </Tr>
                        <Tr>
                            <Td>27</Td>
                            <Td>2013</Td>
                            <Td>The University of Alabama</Td>
                            <Td>Mr. John McIntosh, Northwest-Shoals Community College</Td>
                            <Td>Dr. Jon C. Acker, The University of Alabama</Td>
                        </Tr>
                    </Tbody>
                </Table>                
                <br/>
                <br/>

                <div>
                    <input type="submit" class="colorbtn" value="Consultar Producto" />
                </div>
                <br />
                <br />
                <label >
                    Imagen: <input type="file" name="Imagen" id="imgPro"  />
                </label>
                <br />
                <br />
                <label >
                    Nombre: <input type="text" name="Nombre" id="nombrePro"  />
                </label>
                <br />
                <br />
                <label >
                    Talla: <input type="text" name="Talla" id="tallaPro" />
                </label>
                <br />
                <br />
                <label >
                    Costo: <input type="text" name="Costo" id="costoPro" />
                </label>

                <br/>
                <br/>

                <div>
                    <input type="submit" class="colorbtn" value="Modificar Producto" />
                </div>
            </div>
        );
    }
}

export default Modificar;