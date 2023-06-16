const express = require("express");
const proyectoRuta = express.Router();
const proyectoControlador = require("../controladores/proyectoControlador");

// api/clientes

//Crear -> post
proyectoRuta.post("/", proyectoControlador.crearProyecto);
//Obtener clientes -> get
proyectoRuta.get("/", proyectoControlador.obtenerProyectos);
//Actualizar cliente -> put
proyectoRuta.put("/:id", proyectoControlador.actualizarProyecto);
//Obtener un cliente -> get
proyectoRuta.get("/:id", proyectoControlador.obtenerProyecto);
//eliminar cliente-> delete
proyectoRuta.delete("/:id", proyectoControlador.eliminarProyecto);

module.exports = proyectoRuta;
