const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Cargar variables de entorno
dotenv.config();

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("🔥 Conexión a MongoDB exitosa!");
} catch (error) {
    console.error("❌ Error en la conexión a MongoDB:", error.message);
    process.exit(1);
}
};


module.exports = conectarDB;
