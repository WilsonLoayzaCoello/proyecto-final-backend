/*
Empleados
    Ruta: '/api/empleados'
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEmpleados,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
  getEmpleadoById,
} = require("../controllers/empleados");

const router = Router();

router.get("/", validarJWT, getEmpleados);

router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre del empleado es necesario").not().isEmpty(),
    check("tienda", "El id de la tienda debe ser válido").isMongoId(),
    validarCampos,
  ],
  crearEmpleado
);

router.put(
  "/:id",
  [
    validarJWT,
    check("nombre", "El nombre del empleado es necesario").not().isEmpty(),
    check("tienda", "El id de la tienda debe ser válido").isMongoId(),
    validarCampos,
  ],
  actualizarEmpleado
);

router.delete("/:id", validarJWT, eliminarEmpleado);

router.get("/:id", validarJWT, getEmpleadoById);

module.exports = router;
