const { response } = require("express");
const Empleado = require("../models/empleado");

const getEmpleados = async (req, res = response) => {
  const empleados = await Empleado.find()
    .populate("usuario", "nombre img")
    .populate("tienda", "nombre img");

  res.json({
    ok: true,
    empleados,
  });
};

const crearEmpleado = async (req, res = response) => {
  const uid = req.uid;
  const empleado = new Empleado({
    usuario: uid,
    ...req.body,
  });
  try {
    const empleadoDB = await empleado.save();

    res.json({
      ok: true,
      empleado: empleadoDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarEmpleado = async (req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;

  try {
    const empleado = await Empleado.findById(id);

    if (!empleado) {
      return res.status(404).json({
        ok: true,
        msg: "Empleado no encontrado por id",
      });
    }

    const cambiosEmpleado = {
      ...req.body,
      usuario: uid,
    };

    const empleadoActualizado = await Empleado.findByIdAndUpdate(
      id,
      cambiosEmpleado,
      { new: true }
    );

    res.json({
      ok: true,
      empleado: empleadoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const eliminarEmpleado = async (req, res = response) => {
  const id = req.params.id;

  try {
    const empleado = await Empleado.findById(id);

    if (!empleado) {
      return res.status(404).json({
        ok: true,
        msg: "Empleado no encontrado por id",
      });
    }

    await Empleado.findByIdAndDelete(id);

    res.json({
      ok: true,
      msg: "Empleado eliminado de la base de datos",
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
  getEmpleados,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
};
