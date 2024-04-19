const { response } = require("express");
const Tienda = require("../models/tienda");

const getTiendas = async (req, res = response) => {
  const tiendas = await Tienda.find().populate("usuario", "nombre img");
  res.json({
    ok: true,
    tiendas
  });
};

const crearTienda = async (req, res = response) => {
  const uid = req.uid;
  const tienda = new Tienda({
    usuario: uid,
    ...req.body,
  });

  try {

    const tiendaDB = await tienda.save();
    res.json({
      ok: true,
      tienda: tiendaDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarTienda = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "actualizarTienda",
  });
};

const eliminarTienda = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "eliminarTienda",
  });
};

module.exports = {
  getTiendas,
  crearTienda,
  actualizarTienda,
  eliminarTienda,
};
