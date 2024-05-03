const fs = require("fs");

const Usuario = require("../models/usuario");
const Empleado = require("../models/empleado");
const Tienda = require("../models/tienda");

const borrarImagen = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

const actualizarImagen = async (tipo, id, nombreArchivo) => {
  let pathViejo = "";

  switch (tipo) {
    case "empleados":
      const empleado = await Empleado.findById(id);
      if (!empleado) {
        console.log("No se encontró un empleado por id");
        return false;
      }

      pathViejo = `./uploads/empleados/${empleado.img}`;
      borrarImagen(pathViejo);

      empleado.img = nombreArchivo;
      await empleado.save();
      return true;
      break;

    case "tiendas":
      const tienda = await Tienda.findById(id);
      if (!tienda) {
        console.log("No se encontró una tienda por id");
        return false;
      }

      pathViejo = `./uploads/tiendas/${tienda.img}`;
      borrarImagen(pathViejo);

      tienda.img = nombreArchivo;
      await tienda.save();
      return true;
      break;

    case "usuarios":
      const usuario = await Usuario.findById(id);
      if (!usuario) {
        console.log("No se encontró un usuario por id");
        return false;
      }

      pathViejo = `./uploads/usuarios/${usuario.img}`;
      borrarImagen(pathViejo);

      usuario.img = nombreArchivo;
      await usuario.save();
      return true;
      break;
  }
};

module.exports = {
  actualizarImagen,
};
