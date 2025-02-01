const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, enum: ["cliente", "admin"], default: "cliente" },
    dateRegister: {type:Date, default:Date.now},
});

module.exports = mongoose.model("User", UserSchema);
