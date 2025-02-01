import React, { useState } from "react";
import apiClient from "../Api/axiosConfig";
import styles from "../styles/register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Rol, setRol] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await apiClient.post("/Register", {
        name,
        email,
        password,
        Rol,
      });
      console.log("Usuario registrado:", response.data);
      alert("Usuario Registrado correctamente");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Error al registrarse");
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div className={`${styles.container} flex items-center justify-center h-screen`}>
      <div className={`${styles.formContainer} bg-white p-8 rounded-lg shadow-lg w-96`}>
        <h2 className={`${styles.title} text-2xl font-bold mb-4`}>Registrarse</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          <input
            type="text"
            placeholder="cliente/admin"
            value={Rol}
            onChange={(e) => setRol(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className={`${styles.button} w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600`}
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
