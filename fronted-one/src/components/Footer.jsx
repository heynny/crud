import React from 'react';
import styles from '../styles/footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoContainer}>
                    <img
                        src="/imgs/lindo.png"
                        alt="Eventtify Logo"
                        className={styles.logo}
                    />
                </div>
                <p className={styles.businessName}>Eventtify</p>
                <p className={styles.address}>
                    Dirección: Calle Ficticia 123, Ciudad
                </p>
                <p className={styles.phrase}>
                    "¡Haz que cada momento sea único con Eventtify!"
                </p>
                <div className={styles.socialLinks}>
                    <a
                        href="mailto:specialmoments@eventtify.com"
                        className={styles.socialLink}
                    >
                        <img
                            src="/imgs/gmail.png"
                            alt="Gmail"
                            className={styles.socialIcon}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/eventtify"
                        className={styles.socialLink}
                    >
                        <img
                            src="/imgs/instagram.png"
                            alt="Instagram"
                            className={styles.socialIcon}
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/eventtify"
                        className={styles.socialLink}
                    >
                        <img
                            src="/imgs/facebook.png"
                            alt="Facebook"
                            className={styles.socialIcon}
                        />
                    </a>
                    <a
                        href="https://www.tiktok.com/@eventtify"
                        className={styles.socialLink}
                    >
                        <img
                            src="/imgs/tiktok.png"
                            alt="TikTok"
                            className={styles.socialIcon}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
