const User = require("../models/User");
const bcrypt = require("bcryptjs");

// exports.postUser = async (req,res)=>{
//     try{
//         const newUser= new User(req.body);
//         await newUser.save();
//         res.status(201).json(newUser);
//     }catch(error){
//         res.status(500).json({message: "Error al crear el usuario:", error: error.message})
//     }
// };

exports.postUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "El correo ya está en uso" });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

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





exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
    }
};

exports.putUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario", error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el usuario", error: error.message });
    }
};