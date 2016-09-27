# flux-react-node
Ejemplo funcional de Flux, react sobre Node js
El original está en https://egghead.io/lessons/react-flux-overview-and-dispatchers aunque he tenido que tocar algún fichero, porque el ejemplo está basado en una versón anterior de React.

El ejemplo es una prueba de concepto que permite comprobar la reutilización de componentes desarrollados por nosotros.
Para ejecutar el proyecto:

Para la instalación de las depencias: ,
npm install gulp browserify reactify vinyl-source-stream react react-dom react-router-component httpster httpdispatcher

Para la ejecución, se puedes usar dos implmentaciones de servidor diferentes, aunque de momento esto obliga a tener duplcado el 'index.html'

1.- usando httpster, en el puerto 3333
	gulp (o npm install) 
	cd dist 
	httpster

2.- usado httpdispatcher, en el puerto 8080
	gulp (o npm install)
	node server.js


