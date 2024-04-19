/*
Tiendas
ruta: '/api/tiendas'
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getTiendas,
  crearTienda,
  actualizarTienda,
  eliminarTienda,
} = require("../controllers/tiendas");

const router = Router();

router.get("/", getTiendas);

router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre de la tienda es necesario").not().isEmpty(),
    validarCampos
  ],
  crearTienda
);

router.put(
  "/:id",
  [
    
  ],
  actualizarTienda
);

router.delete(
  "/:id",
  eliminarTienda
);

module.exports = router;
