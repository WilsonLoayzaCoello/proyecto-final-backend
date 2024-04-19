const { response } = require("express");

const fileUpload = (req, res = response) => {
  const { tipo, id } = req.params;

  const tiposValidos = ["usuarios", "tiendas", "empleados"];
  if (!tiposValidos.includes(tipo)) {
    return res.status(400).json({
      ok: false,
      msg: "Tipo no válido",
    });
  }

  res.json({
    ok: true,
    msg: "File uploaded",
  });
};

module.exports = {
  fileUpload,
};
