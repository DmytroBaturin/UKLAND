import styles from "./index.module.scss";
export const Modal = ({ onClick }) => {
  return (
    <div className={styles.modalwraper}>
      <div className={styles.modal}>
        <img width="30" src="assets/close.svg" onClick={onClick} />
        <div className={styles.info}>
          <h1>Подача форми</h1>
          <p>
            Отримати прохідку можна після того, як Ви напишете нашому адміну,
            після чого він надішле форму для оплати прохідки. Очікування
            відповіді від адміну може зайняти від 1 до 3 днів
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
        <button>Подати заявку</button>
      </div>
    </div>
  );
};
