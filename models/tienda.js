// const { Schema, model } = require("mongoose");

// const TiendaSchema = Schema(
//   {
//     nombre: {
//       type: String,
//       required: true,
//     },

//     img: {
//       type: String,
//     },
//     usuario: {
//       required: true,
//       type: Schema.Types.ObjectId,
//       ref: "Usuario",
//     },
//   },
//   { collection: "tiendas" }
// );

// TiendaSchema.method("toJSON", function () {
//   const { __v, ...object } = this.toObject();
//   return object;
// });

// module.exports = model("Tienda", TiendaSchema);

const mongoose = require("mongoose");

const TiendaSchema = new mongoose.Schema({
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
});

TiendaSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = mongoose.model("Tienda", TiendaSchema);
