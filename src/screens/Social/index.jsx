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
          href="https://www.tiktok.com/@uklandproject"
          img={"assets/tiktok.png"}
          title={"TikTok"}
          text={"Тут цікавенькі короткі відео"}
        />
        <SocialCard
          href="https://discord.com/invite/wGPaVgsQAh"
          img={"assets/discord.png"}
          title={"Discord"}
          text={"Основний чат нашої спільноти"}
        />
        <SocialCard
          href="https://www.tiktok.com/@uklandproject"
          img={"assets/wiki.png"}
          title={"Wiki"}
          text={"Тут всі наші правила, та важлива інформація"}
        />
      </div>
    </>
  );
};
