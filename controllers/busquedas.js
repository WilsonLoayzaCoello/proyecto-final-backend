const { response } = require("express");

const Usuario = require("../models/usuario");
const Empleado = require("../models/empleado");
const Tienda = require("../models/tienda");

const getTodo = async (req, res = response) => {
  const busqueda = req.params.busqueda;
  const regex = new RegExp(busqueda, "i");

  const [usuarios, empleados, tiendas] = await Promise.all([
    Usuario.find({ nombre: regex }),
    Empleado.find({ nombre: regex }),
    Tienda.find({ nombre: regex }),
  ]);

  res.json({
    ok: true,
    usuarios,
    empleados,
    tiendas,
  });
};

const getDocumentosColeccion = async (req, res = response) => {
  const tabla = req.params.tabla;
  const busqueda = req.params.busqueda;
  const regex = new RegExp(busqueda, "i");

  let data = [];

  switch (tabla) {
    case "empleados":
      data = await Empleado.find({ nombre: regex })
        .populate("usuario", "nombre img")
        .populate("tienda", "nombre img");
      break;
    case "tiendas":
      data = await Tienda.find({ nombre: regex }).populate(
        "usuario",
        "nombre img"
      );
      break;
    case "usuarios":
      data = await Usuario.find({ nombre: regex });
      break;
    default:
      return res.status(400).json({
        ok: false,
        msg: "La tabla debe ser usuarios/empleados/tiendas",
      });
  }

  res.json({
    ok: true,
    resultados: data,
  });
};

module.exports = {
  getTodo,
  getDocumentosColeccion,
};
