import styles from "./index.module.scss";
export const SocialCard = ({ text, title, img, href }) => {
  return (
    <a target="_blank" className={styles.card} href={href}>
      <img src={img} />
      <span className={styles.description}>
        <h1>{title}</h1>
        <p>{text}</p>
      </span>
    </a>
  );
};
