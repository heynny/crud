const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "clave_secretapara_jwt";

exports.userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "El correo ya está en uso" });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        console.log("password", password);

        const newUser = new User({
            name,
            email,
            password: encryptedPassword,
            rol: "cliente"
        });

        await newUser.save();
        res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el usuario", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Correo o contraseña incorrecta" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Correo o contraseña incorrecta" });
        }

        const token = jwt.sign({ id: user._id, rol: user.rol }, JWT_SECRET, { expiresIn: "1hr" });
        res.status(200).json({ message: "Inicio de sesión exitoso", token });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
    }
};
