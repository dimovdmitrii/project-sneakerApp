import React from "react";
import styles from "./styles.module.css";
import facebookIcon from "../../assets/icons/facebooks.svg";
import twitterIcon from "../../assets/icons/tweeters.svg";
import instagramIcon from "../../assets/icons/instagrams.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.contactInfo}>
          <h4>Контакты</h4>
          <p>8 800 000 00 00</p>
          <p>emailexample@email.com</p>
          <div className={styles.copyright}>
            <p>2026 Сникер-магазин. Все права защищены</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.socialIcons}>
            <a href="facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </div>
          <div className={styles.subscribe}>
            <input placeholder="Введите свой email:" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
