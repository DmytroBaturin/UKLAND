import styles from "./index.module.scss";
import { SocialCard } from "../../components/Social/index.jsx";
export const Social = () => {
  return (
    <>
      <div className={styles.title}>
        <h1>Шукайте нас також в...</h1>
        <p className={styles.subtitle}>
          наші соцмережі де ми будемо раді вас бачити
        </p>
      </div>
      <div className={styles.container}>
        <SocialCard
          img={"assets/tiktok.png"}
          title={"TikTok"}
          text={"Тут цікавенькі короткі відео"}
        />
        <SocialCard
          img={"assets/discord.png"}
          title={"TikTok"}
          text={"Основний чат нашої спільноти"}
        />
        <SocialCard
          img={"assets/wiki.png"}
          title={"Wiki"}
          text={"Тут всі наші правила, та важлива інформація"}
        />
      </div>
    </>
  );
};
