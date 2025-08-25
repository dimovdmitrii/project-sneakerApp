import styles from "./styles.module.css";
import facebookColor from "..//..//assets/icons/facecolor.svg";
import xColor from "../../assets/icons/x_icon.svg";
import snapColor from "../../assets/icons/hz.svg";

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.mainContent}>
        <div className={styles.infoColumn}>
          <h1 className={styles.contactsTitle}>Контакты</h1>

          <ul className={styles.contactList}>
            <li>8 800 000 00 00</li>
            <li>emailexample@email.com</li>
          </ul>

          <form className={styles.contactForm}>
            <div className={styles.inputRow}>
              <input
                type="email"
                placeholder="Ваш email"
                className={styles.formInput}
              />
              <input
                type="text"
                placeholder="Ваше имя"
                className={styles.formInput}
              />
            </div>
            <textarea
              placeholder="Введите сообщение"
              className={`${styles.formInput} ${styles.messageInput}`}
            />
            <button type="submit" className={styles.submitButton}>
              Отправить
            </button>
          </form>
        </div>

        <div className={styles.socialColumn}>
          <p className={styles.socialTitle}>Найдите нас:</p>
          <div className={styles.socialLogos}>
            <a
              href="https://www.snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={snapColor}
                alt="Snapchat"
                className={styles.socialLogo}
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookColor}
                alt="Facebook"
                className={styles.socialLogo}
              />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={xColor}
                alt="X (formerly Twitter)"
                className={styles.socialLogo}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
