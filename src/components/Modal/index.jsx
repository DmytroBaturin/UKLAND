import styles from "./index.module.scss";
import useComponentVisible from "../../hooks/outsideclick.js";

export const Modal = ({ onClick }) => {
  const { ref } = useComponentVisible(true);

  return (
    <div className={styles.modalwraper}>
      <div ref={ref} className={styles.modal}>
        <img width="30" src="assets/close.svg" onClick={onClick} />
        <div className={styles.info}>
          <h1>Про оплату</h1>
          <p>
            Щоб купити прохідку, вам потрібно перейти на банку Monabank та
            оплатити суму прохідки! <br />
            Прохідки є: <br />
            <h3>
              1) На місяць - 50грн. <br /> 2) Назавжди - 150грн.
            </h3>
            <p>
              Під платіж, вкажіть Ваш discord, щоб з вами зв'язався
              Адміністратор! Очікуйте відповіді протягом 24-48годин!
            </p>
          </p>
        </div>
        <a target="_blank" href="https://send.monobank.ua/jar/UbQzFQ5u7">
          <button>Купити прохідку</button>
        </a>
      </div>
    </div>
  );
};
