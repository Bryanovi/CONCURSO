const Proyecto = require("../modelos/proyectoModelo");

//Crear cliente
exports.crearProyecto = async (req, res) => {
  try {
    let proyecto;
    proyecto = new Proyecto(req.body);
    await proyecto.save();
    res.send(proyecto);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro del proyecto");
  }
};

//Obtener clientes
exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los proyectos");
  }
};

//Actualizar producto
exports.actualizarProyecto = async (req, res) => {
  try {
    const { nombre, descripcion, responsable, fechaInicio, fechaFin,  } = req.body;
    console.log(nombre, descripcion,  responsable, fechaInicio, fechaFin);
    let proyecto = await proyecto.findById(req.params.id);
    if (!proyecto) {
      res.status(404).json({ msg: "No existe el proyecto" });
    }
    console.log(proyecto);
    proyecto.nombre = nombre;
    proyecto.descripcion = descripcion;
    proyecto.fechaInicio = fechaInicio;
    proyecto.fechaFin = fechaFin;
    proyecto.responsable = responsable;

    proyecto = await Proyecto.findOneAndUpdate(
      { _id: req.params.id },
      proyecto,
      {
        new: true,
      }
    );

    res.json(proyecto);
  } catch (e) {
    res.status(500).send("Hubo problemas al actualizar el proyecto");
  }
};

//Obtener cliente
exports.obtenerProyecto = async (req, res) => {
  try {
    let proyecto = await Proyecto.findById(req.params.id);
    if (!proyecto) {
      res.status(404).json({ msg: "No existe el proyecto" });
    }
    res.json(proyecto);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar el proyecto");
  }
};

//Eliminar cliente
exports.eliminarProyecto = async (req, res) => {
  try {
    let proyecto = await Proyecto.findById(req.params.id);
    if (!proyecto) {
      res.status(404).json({ msg: "No existe el proyecto" });
    }
    await Proyecto.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "proyecto Eliminado" });
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al eliminar el proyecto");
  }
};
