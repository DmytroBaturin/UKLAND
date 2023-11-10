import styles from "./index.module.scss";
import { SocialCard } from "../../components/Social/index.jsx";
export const Social = () => {
  return (
    <>
      <div className={styles.title}>
        <h1>Шукайте нас також в...</h1>
        <p className={styles.subtitle}>
          наші соцмережі, де ми будемо раді вас бачити
        </p>
      </div>
      <div className={styles.container}>
        <SocialCard
          href="https://www.tiktok.com/@uklandproject"
          img={"assets/tiktok1.png"}
          title={"TikTok"}
          text={
            "Є бажання подивитися короткі відео про сервер? Тоді загляни у наш Tik Tok!"
          }
        />
        <SocialCard
          href="https://discord.com/invite/wGPaVgsQAh"
          img={"assets/discord.png"}
          title={"Discord"}
          text={"Основний чат нашої спільноти"}
        />
        <SocialCard
          href="https://t.me/uklandproject"
          img={"assets/telegram.png"}
          title={"Telegram"}
          text={"Головні новини та інформація сервера!"}
        />
        <SocialCard
          href="https://www.instagram.com/uk.lland"
          img={"assets/instagram.png"}
          title={"Instagram"}
          text={"Чудові картинки про сервер тільки тут!"}
        />
        <SocialCard
          href="https://www.youtube.com/@uklandproject"
          img={"assets/youtube.png"}
          title={"Youtube"}
          text={"Запасайся смаколиками та переглядай відео про наш сервер!"}
        />
      </div>
    </>
  );
};
