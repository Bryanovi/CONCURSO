const mongoose = require("mongoose");
const tareaSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  fechaInicio: {
    type: Date,
    require: true,
  },
  fechaFin: {
    type: Date,
    require: true,
  },
  estado: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("tarea", tareaSchema);
