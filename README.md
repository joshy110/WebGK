# WebGK
 
El presente proyecto es realizado para conocer sobre las nuevas tecnologías Web que existen acutalmente en el mercado. 
Por ello se realizó un proyecto CRUD en el cual se utilizara el FrameWork React junto a NodeJs y Mongo (utilizando mLab). A su vez
se conecto con la nube AWS en donde se subieron las imágenes Docker para poder tenerlo todo en ese entorno y comprender el uso 
de una nube.

Por inconvenientes con mi versión de windows utilice Ubuntu 14.0 para realizar y terminar el proyecto.

En este apartado se comentara sobre el FrontEnd realizado.

## Comenzando 🚀

A continuación se presenta se detalla lo realizado en este proyecto del lado del FrontEnd

### Pre-requisitos 📋

- NodeJs (en windows es posible descargar e instalar, en ubuntu el comando es _sudo apt-get install nodejs_ y _sudo apt-get install npm_
- React (se uso el comando _npm create-react-app_  _nombre de la aplicacion_ )
- Docker (se debe tener un conocimiento básico)
- Sistema Operativo Windows 10 pro en adelante, Ubuntu 14.0 en adelante)
- RAM 4G en adelante
- Procesador Core i5 de preferencia
- Conexión a Internet
- Paciencia
- De preferencia un entorno para visualizar textos como Sublime o VisualStudioCode.
- Si utilizó Windows descargar GitBash para hacer push y pull a git

### Instalación 🔧

El proceso de instalación es el sigueinte: 

_1. Instalar NodeJs_

```
$ sudo apt-get install nodejs
```

_2. Instalar Npm (tuve que instalarlos por separado)_

```
$ sudo apt-get install npm
```

_3. Crear la aplicacion React_

```
$ npm install -g create-react-app mi-aplicacion
$ npm install
$ npm start
```

_4. Posteriormente se agregaron los componentes a utilizar en la aplicación Ract_

_5. Se creo en primera instancia un FrontEnd que no tuviese conexión con ningun server
esto se puede visualizar en la rama que lleva por nombre FrontEndNoServer la cual posee la estructura a utilizar._

_6. Posteriormente se poseen otras ramas donde ya se implemento el Server por lo que se hizo uso de un fetch para poder realizar
las funciones de Crear, Eliminar y Modificar (CRUD por sus siglas en inglés)._

_7. Luego se creo la lógica de la conexión web a utilizar con nginx para que este fuera el que tuviese el puerto a utilizar._

_8. Fue necesaria la creación de un DockerFile el cual contuviese las instrucciones de los componentes que la imágen debe de tener._

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [REACT](https://reactjs.org/) - El framework web usado
* [NodeJs](https://nodejs.org/en/) - Server
* [MongoDB](https://mlab.com) - Entorno que posee la base de datos Mongo
* [Nginx](https://www.nginx.com/) - Entorno que posee el webserving
* [Docker](https://www.docker.com/) - Entorno usado para crear imagenes y contendores
* [AWS](https://aws.amazon.com/) - Entorno Web donde se montaron las imagenes creadas


## Autores ✒️

* **Josué David Cabrera Morales** - *Todo el Desarollo del BackEnd y FrontEnd* - [joshy110](https://github.com/joshy110)

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
