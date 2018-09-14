//Dependencias
import React from 'react';
import { render } from 'react-dom';

//Routers
import AppRouters from './routes';

//Estilos y componentes
import './index.css';
import App from './Componentes/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
