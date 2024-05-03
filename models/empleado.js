// const { Schema, model } = require("mongoose");

// const EmpleadoSchema = Schema({
//   nombre: {
//     type: String,
//     required: true,
//   },

//   img: {
//     type: String,
//   },
//   usuario: {
//     type: Schema.Types.ObjectId,
//     ref: "Usuario",
//     required: true,
//   },
//   tienda: {
//     type: Schema.Types.ObjectId,
//     ref: "Tienda",
//     required: true,
//   },
// });

// EmpleadoSchema.method("toJSON", function () {
//   const { __v, ...object } = this.toObject();
//   return object;
// });

// module.exports = model("Empleado", EmpleadoSchema);

const mongoose = require("mongoose");

const EmpleadoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  tienda: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tienda",
    required: true,
  },
});

EmpleadoSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = mongoose.model("Empleado", EmpleadoSchema);
