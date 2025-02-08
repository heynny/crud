import React, { useState } from "react";
import apiClient from "../Api/axiosConfig";
import styles from "../styles/createEvents.module.css";

const CreateEvent = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [capacity, setCapacity] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState("");

    const handleEvent = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await apiClient.post("/Event/CreateEvent", {
                name,
                date,
                time,
                location,
                description,
                imageUrl,
                capacity,
                price,
            });
            console.log("Evento creado:", response.data);
            alert("Evento creado correctamente");
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || "Error al crear el evento");
            } else {
                setError("Error al conectar con el servidor");
            }
        }
    };

    return (
        <div className={`${styles.container} flex items-center justify-center h-screen`}>
            <div className={`${styles.formContainer} bg-white p-8 rounded-lg shadow-lg w-96`}>
                <h2 className={`${styles.title} text-2xl font-bold mb-4`}>Crear Evento</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleEvent}>
                    <input
                        type="text"
                        placeholder="Nombre del Evento"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`${styles.input} mb-4`}
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`${styles.input} mb-4`}
                    />
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className={`${styles.input} mb-4`}
                    />
                    <input
                        type="text"
                        placeholder="Ubicación"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className={`${styles.input} mb-4`}
                    />
                    <textarea
                        placeholder="Descripción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={`${styles.input} mb-4`}
                    />
                    <input
                        type="text"
                        placeholder="URL de la imagen"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className={`${styles.input} mb-4`}
                    />
                    <input
                        type="number"
                        placeholder="Capacidad"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        className={`${styles.input} mb-4`}
                    />
                    <input
                        type="number"
                        placeholder="Precio"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className={`${styles.input} mb-4`}
                    />
                    <button
                        type="submit"
                        className={`${styles.button} w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600`}
                    >
                        Crear Evento
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
