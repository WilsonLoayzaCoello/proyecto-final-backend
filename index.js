require("dotenv").config();

// Importamos el módulo express
const express = require("express");
var cors = require("cors");

// Importamos la configuración de la base de datos
const { dbConnection } = require("./database/config");

// Creamos el server de express
const app = express();

// Configuramos CORS
app.use(cors());

// Directorio público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Conexión a la base de datos
dbConnection();

// Rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/tiendas", require("./routes/tiendas"));
app.use("/api/empleados", require("./routes/empleados"));
app.use("/api/todo", require("./routes/busquedas"));
app.use("/api/login", require("./routes/auth"));
app.use("/api/upload", require("./routes/uploads"));

// Iniciamos el server en el puerto 3000
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
