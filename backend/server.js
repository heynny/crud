const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const conectarDB = require("./src/config/baseDatos");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const connectToDB = async () => {
try {
    await conectarDB();
    console.log("🔥 Conexión a MongoDB exitosa!");


    app.use("/api/authentication", require("./src/routes/authRoutes"));
    app.use("/api/events", require("./src/routes/eventRoutes"));
    app.use("/api/users", require("./src/routes/userRoutes"));
    app.use("/api/schedule", require("./src/routes/scheduleRoutes"));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`);
    });
} catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    process.exit(1);
}
};

connectToDB();
