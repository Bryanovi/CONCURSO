const mongoose = require("mongoose");
const proyectoSchema = mongoose.Schema({
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
  responsable: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("proyecto", proyectoSchema);
