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
  res.json({
    ok: true,
    msg: "actualizarEmpleado",
  });
};

const eliminarEmpleado = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "eliminarEmpleado",
  });
};

module.exports = {
  getEmpleados,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
};
