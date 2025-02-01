import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/header.module.css";
import logo from '../img/lindo.png';
import userIcon from '../img/user.png';

const Header = () => {
    const [usuario, setUsuario] = useState(null);
    const [rol, setRol] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem("usuario");
        if (usuarioGuardado) {
            const userData = JSON.parse(usuarioGuardado);
            setUsuario(userData);
            setRol(userData.rol); 
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        setUsuario(null);
        setRol(null);
        navigate("/Login");
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <h1 className={styles.title}>Eventify</h1>
                </div>
                <div className={styles.navLinks}>
                    {usuario ? (
                        <>
                            {rol === "admin" && ( // Mostrar CreateEvent solo si el usuario es admin
                                <Link to="/create-event" className={styles.navLink}>
                                    Crear Evento
                                </Link>
                            )}
                            <div className={styles.userInfo}>
                                <img src={userIcon} alt="Usuario" className={styles.userIcon} /> {/* Imagen personalizada */}
                                <span>{usuario.nombre}</span>
                            </div>
                            <button onClick={handleLogout} className={styles.logoutButton}>
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <>
                            {location.pathname !== "/Login" && location.pathname !== "/Register" && (
                                <Link to="/Login" className={styles.navLink}>
                                    Iniciar sesión
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
