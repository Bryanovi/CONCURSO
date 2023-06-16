const Tarea = require("../modelos/tareaModelo");

//Crear cliente
exports.crearTarea = async (req, res) => {
  try {
    let tarea;
    tarea = new Tarea(req.body);
    await tarea.save();
    res.send(tarea);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro de la tarea");
  }
};

//Obtener clientes
exports.obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los tareas");
  }
};

//Actualizar producto
exports.actualizarTarea = async (req, res) => {
  try {
    const { nombre, descripcion, responsable, fechaInicio, fechaFin, estado} = req.body;
    console.log(nombre, descripcion,  responsable, fechaInicio, fechaFin);
    let tarea = await tarea.findById(req.params.id);
    if (!tarea) {
      res.status(404).json({ msg: "No existe la tarea" });
    }
    console.log(tarea);
    tarea.nombre = nombre;
    tarea.descripcion = descripcion;
    tarea.fechaInicio = fechaInicio;
    tarea.fechaFin = fechaFin;
    tarea.estado = estado;

    tarea = await Tarea.findOneAndUpdate(
      { _id: req.params.id },
      tarea,
      {
        new: true,
      }
    );

    res.json(tarea);
  } catch (e) {
    res.status(500).send("Hubo problemas al actualizar la tarea");
  }
};

//Obtener cliente
exports.obtenerTarea = async (req, res) => {
  try {
    let tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      res.status(404).json({ msg: "No existe el tarea" });
    }
    res.json(tarea);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar la tarea");
  }
};

//Eliminar cliente
exports.eliminarTarea = async (req, res) => {
  try {
    let tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      res.status(404).json({ msg: "No existe el tarea" });
    }
    await Tarea.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "tarea Eliminado" });
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al eliminar el tarea");
  }
};
