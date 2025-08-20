import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h4>Контакты</h4>
          <p>8 800 000 00 00</p>
          <p>email@example.com</p>
        </div>
        <div className={styles.socialIcons}>
          {/* Здесь будут иконки, например, Font Awesome или SVG */}
        </div>
        <div className={styles.copyright}>
          <p>2024 Сникер-магазин. Все права защищены</p>
        </div>
        <div className={styles.subscribeForm}>
          <input type="email" placeholder="Введите свой email:" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
