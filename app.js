/**
 * Crearemos un servidor con el módulo express
 **/

// Importamos el módulo express y lo asignamos a la constante express (es una funcion en realidad)
const express = require('express');

// Creamos una instancia de la aplicacion Express
const app = express();

// Declaración del puerto
const port = 3000; 

// Definimos una ruta utilizando el método get()
// Cuando se recibe una solicitud GET a la ruta '/miRuta', se ejecuta la función de devolución de llamada
// req (request) representa la solicitud HTTP recibida
// res (response) representa la respuesta HTTP que se enviará al cliente
app.get("/miRuta", (req, res) => {
res.send('Hola Mundo!');
});

// Iniciamos el servidor Express en el puerto 3000
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});

//En el navegador --> http://localhost:3000/miRuta