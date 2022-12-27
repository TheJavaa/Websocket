# CHAT COLABORATIVO

En base a lo desarrollado en clase, realizar una aplicación basada en node.js, express y websocket que permita generar un chat colaborativo entre usuarios conectados.

-   Cada usuario podrá ingresar su nombre y mensaje a través de un formulario y enviar la información utilizando el canal de websocket.
-   Los mensajes serán presentados en tiempo real en cada uno de los clientes.
-   Cuando un usuario nuevo se conecte, recibirá todos los mensajes hasta ahí ingresados.
-   Los mensajes persistirán en memoria del servidor.

![Alt text](img/Imagen1.png)

<br />

---

---

<br />

Inicializar el proyecto  
`npm init`

Instalar express  
`npm install express`

Instalar socket.io  
`npm install socket.io`

Verificar tener instalado nodemon de manera global sino instalarlo  
`npm install -g nodemon`

En el package.json agregar un script para correr el servidor con nodemon

```javascript
"scripts": {
    "dev": "nodemon index.js"
}
```

index.js debería ser el nombre del archivo que levanta el servidor

Correr el servidor  
`npm run dev`
