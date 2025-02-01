// src/utils/index.js

const jwt = require("jsonwebtoken");

// Utilidad para formatear fechas
const formatDate = (date) => {
const options = { year: "numeric", month: "long", day: "numeric" };
return new Date(date).toLocaleDateString("es-ES", options);
};

// Utilidad para generar tokens JWT
const generateToken = (id) => {
return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Utilidad para validar correos electrónicos
const isValidEmail = (email) => {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
};

// Utilidad para verificar si un campo está vacío
const isEmptyField = (field) => {
return !field || field.trim() === "";
};

// Clase personalizada para manejar errores
class CustomError extends Error {
constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
}
}

// Función para manejar errores globalmente
const handleError = (err, res) => {
const { statusCode = 500, message } = err;
res.status(statusCode).json({ message });
};

module.exports = { formatDate, generateToken, isValidEmail, isEmptyField, CustomError, handleError };
