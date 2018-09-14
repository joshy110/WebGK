//Dependencias
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Routers
import AppRoutes from './routes';

//Estilos y componentes
import './index.css';
import App from './Componentes/App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <AppRoutes />
    </Router>, document.getElementById('root')
);
registerServiceWorker();
