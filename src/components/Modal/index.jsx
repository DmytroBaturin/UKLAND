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
          <div className={styles.about}>
            <h3>Рекомендуємо завантажити</h3>
            <div className={styles.voice}>
              <img src="assets/voice.png" width="50" />
              <h5>
                Simple Voice -{" "}
                <span>
                  <a
                    target="_blank"
                    href="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat"
                  >
                    *посилання на оф. сайт*
                  </a>
                </span>
              </h5>
            </div>
            <div className={styles.voice}>
              <img
                style={{ marginRight: "5px" }}
                src="assets/emote.png"
                width="50"
              />
              <h5>
                EmoteCraft -{" "}
                <span>
                  <a
                    target="_blank"
                    href="https://www.curseforge.com/minecraft/mc-mods/emotecraft"
                  >
                    *посилання на оф. сайт*
                  </a>
                </span>
              </h5>
            </div>
          </div>
        </div>
        <a href="https://send.monobank.ua/jar/UbQzFQ5u7">
          <button>Подати заявку</button>
        </a>
      </div>
    </div>
  );
};
