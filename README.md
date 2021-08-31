# PRODUCTS API

Hola! esta es una API de productos desarrollada con expressJS y Typescript

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Que cosas necesitas para instalar para que la API funcione:_

```
Nodejs > 14
```

### Ejecución🔧

_Para poder ejecutar la APP necesitas seguir los siguientes pasos_

1. Abre una terminal desde la raíz del repositorio y ejecuta el siguiente comando para instalar todas las dependencias de Node que necesita la API para funcionar.

```
npm install
```

2. Para ejecutar la API en modo desarrollo (se re compila automáticamente cuando haces algún cambio).

```
npm run start:dev
```

2. Para ejecutar la API en modo producción. 

```
npm run start:prod
```

3. Para ejecutar los Unit Test. 

```
npm run test
```

### Project Structure 🛠️

estos son los archivos y carpetas que te interesaria modificar

```
repository
│   .env                 //--> aqui modificamos las variables de entorno
│   src/                 //--> carpeta del proyecto
│   │   server.ts        //--> aqui cargamos el servidor
│   │   app.ts           //--> aqui cargamos las rutas y configuraciones
│   └───controllers/     //--> aqui creamos los controladores para cada recurso
│   └───exceptions/      //--> aqui creamos los excepciones
│   └───lib/             //--> aqui ponemos librerias externas
│   └───middleware/      //--> aqui creamos los middlewares
│   └───models/          //--> aqui creamos las interfaces de los modelos de datos
│   └───routes           //--> aqui creamos las rutas para cada recurso
│   └───services/        //--> aqui creamos los servicios para cada recurso

```


## Construido con 🛠️

_herramientas que se utilizaron para crear este proyecto_

* [ExpressJs](https://expressjs.com/es/) - El framework de nodejs.
* [Nodejs](https://nodejs.org/es/) - Plataforma de ejecución.
* [Typescript](https://www.typescriptlang.org/) - El lenguaje de programación.
* [Jest](https://jestjs.io/) - El framework de testing

## Contribuye 🖇️

Si quieres contribuir con el desarrollo y mejora de esta API, solo sigue estos pasos.

1. cuando realices un Pull request recuerda que cambios estas realizando y por que.
2. Comenta bien las líneas de código que modifiques.
3. Utiliza el tipado fuerte de Typescript.
4. Utiliza principios de código limpio.
5. Ten en cuenta que esta API tiene propósitos de aprendizaje así que realiza cambio simples para no confundir a los que recién comienzan con el desarrollo Back End.

## Autores ✒️

Hasta ahora solo yo, pero estoy esperando mas colaboradores:

* **Oliver Zulett** - *Desarrollo* - [OliverZulett](https://github.com/OliverZulett)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Da las gracias públicamente 🤓.