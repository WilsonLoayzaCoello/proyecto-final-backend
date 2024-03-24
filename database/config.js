// Objetivo: Conectar a la base de datos de MongoDB
const mongoose = require("mongoose");

// Función para conectar a la base de datos
const dbConnection = async () => {
  try {
    // await mongoose.connect(process.env.DB_CNN, {
    await mongoose.connect(
      process.env.DB_CNN,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,

        //   useCreateIndex: true
      }
    );

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar la base de datos");
  }
};

// Exportamos la función
module.exports = {
  dbConnection,
};
