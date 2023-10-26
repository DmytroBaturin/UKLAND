import styles from "./index.module.scss";
export const Modal = ({ onClick }) => {
  return (
    <div className={styles.modalwraper}>
      <div className={styles.modal}>
        <img width="30" src="assets/close.svg" onClick={onClick} />
        <div className={styles.info}>
          <h1>Подача форми</h1>
          <p>
            Щоб отримати прохідку, Вам потрібно звернутись до нашого адміну
            серверу, та заповнити простеньку
            <span> заявку (Клікни щоб скопіювати) </span>
            та почекати до поки адмін прийме вашу заявку на сервер
          </p>
          <div className={styles.about}>
            <h3>Рекомендуємо завантажити</h3>
            <div className={styles.voice}>
              <img src="assets/voice.png" width="50" />
              <h5>
                Simple Voice - <span>*скачать*</span>
              </h5>
            </div>
          </div>
        </div>
        <button>Подати заявку</button>
      </div>
    </div>
  );
};
