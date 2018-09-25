//Dependencias
import React from 'react';
import { Route,Switch } from 'react-router-dom';

//Componentes y Estilos
import App from './Componentes/App';
import Home from './Componentes/Home';
import Crear from './Componentes/Crear';
import VerProd from './Componentes/VerProd';
import Page404 from './Componentes/Page404';

//Funciones
//Se realiza un wrap del uso del router
const AppRoutes = () =>
<App>
    <Switch>
        <Route path="/crear" component={Crear} />
        <Route path="/verpr" component={VerProd} />
        <Route path="/" component={Home} />
        <Route  component={Page404} />
    </Switch>
</App>;

export default AppRoutes;