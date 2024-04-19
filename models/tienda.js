const { Schema, model } = require("mongoose");

const TiendaSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },

  img: {
    type: String,
  },
  usuario: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
}, { collection: "tiendas" });

TiendaSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model("Tienda", TiendaSchema);
