import React from 'react';
import "../styles/footer.module.css";

function Footer() {
    return (
    <footer className="footer">
        <div className="footer-content">
        <div className="logo-container">
            {/* Usamos las imágenes directamente desde la carpeta public */}
            <img src="/imgs/lindo.png" alt="Eventtify Logo" className="footer-logo" />
        </div>
        <p className="business-name">Eventtify</p>
        <p className="address">Dirección: Calle Ficticia 123, Ciudad</p>
        <p className="phrase">"¡Haz que cada momento sea único con Eventtify!"</p>

        {/* Redes sociales en la parte inferior */}
        <div className="social-links">
            <a href="mailto:specialmoments@eventtify.com" className="social-link">
                <img src="/imgs/gmail.png" alt="Gmail" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/eventtify" className="social-link">
                <img src="/imgs/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/eventtify" className="social-link">
                <img src="/imgs/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@eventtify" className="social-link">
                <img src="/imgs/tiktok.png" alt="TikTok" className="social-icon" />
            </a>
        </div>
        </div>
    </footer>
    );
}

export default Footer;
