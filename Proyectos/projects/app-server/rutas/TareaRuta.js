const express = require("express");
const tareaRuta = express.Router();
const tareaControlador = require("../controladores/tareaControlador");

// api/clientes

//Crear -> post
tareaRuta.post("/", tareaControlador.crearTarea);
//Obtener clientes -> get
tareaRuta.get("/", tareaControlador.obtenerTareas);
//Actualizar cliente -> put
tareaRuta.put("/:id", tareaControlador.actualizarTarea);
//Obtener un cliente -> get
tareaRuta.get("/:id", tareaControlador.obtenerTarea);
//eliminar cliente-> delete
tareaRuta.delete("/:id", tareaControlador.eliminarTarea);

module.exports = tareaRuta;
