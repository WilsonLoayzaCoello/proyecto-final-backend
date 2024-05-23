const { response } = require("express");
const Tienda = require("../models/tienda");

const getTiendas = async (req, res = response) => {
  const tiendas = await Tienda.find().populate("usuario", "nombre img");

  res.json({
    ok: true,
    tiendas,
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
  const id = req.params.id;
  try {
    const tienda = await Tienda.findById(id);
    if (!tienda) {
      return res.status(404).json({
        ok: false,
        msg: "Tienda no encontrada por id",
      });
    }

    const cambiosTienda = {
      ...req.body,
      usuario: req.uid,
    };

    const tiendaActualizada = await Tienda.findByIdAndUpdate(
      id,
      cambiosTienda,
      {
        new: true,
      }
    );
    res.json({
      ok: true,
      tienda: tiendaActualizada,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const eliminarTienda = async (req, res = response) => {
  const id = req.params.id;
  try {
    const tienda = await Tienda.findById(id);
    if (!tienda) {
      return res.status(404).json({
        ok: false,
        msg: "Tienda no encontrada por id",
      });
    }

    await Tienda.findByIdAndDelete(id);

    res.json({
      ok: true,
      msg: "Tienda eliminada",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getTiendas,
  crearTienda,
  actualizarTienda,
  eliminarTienda,
};
