/*
ruta: /api/uploads/
*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { fileUpload } = require("../controllers/uploads");

const router = Router();

router.put("/:tipo/:id", validarJWT, fileUpload);

module.exports = router;
