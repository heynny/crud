import React, { useEffect, useState } from "react";
import apiClient from "../Api/axiosConfig";
import styles from "../styles/events.module.css";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await apiClient.get("/Event/GetAllEvents"); // Ajusta la ruta según tu backend
                setEvents(response.data);
            } catch (error) {
                console.error("Error al obtener eventos:", error);
            }
        };

        fetchEvents();
    }, []);

    const handleInscription = (eventId) => {
        alert(`Te has inscrito al evento con ID: ${eventId}`);
        // Aquí podrías hacer una petición para inscribirse en el evento
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Eventos Disponibles</h2>
            <div className={styles.eventsGrid}>
                {events.length > 0 ? (
                    events.map((event) => (
                        <div key={event._id} className={styles.eventCard}>
                            <img src={event.imageUrl} alt={event.name} className={styles.eventImage} />
                            <div className={styles.eventDetails}>
                                <h3 className={styles.eventName}>{event.name}</h3>
                                <p className={styles.eventDate}>📅 {event.date} ⏰ {event.time}</p>
                                <p className={styles.eventLocation}>📍 {event.location}</p>
                                <p className={styles.eventDescription}>{event.description}</p>
                                <p className={styles.eventCapacity}>👥 Capacidad: {event.capacity}</p>
                                <p className={styles.eventPrice}>💲 Precio: {event.price ? `$${event.price}` : "Gratis"}</p>
                                <button onClick={() => handleInscription(event._id)} className={styles.inscribeButton}>
                                    Inscribirse
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.noEvents}>No hay eventos disponibles</p>
                )}
            </div>
        </div>
    );
};

export default Events;
