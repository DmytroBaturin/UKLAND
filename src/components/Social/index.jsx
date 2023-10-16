import styles from "./index.module.scss";
export const SocialCard = ({ text, title, img }) => {
  return (
    <div className={styles.card}>
      <img src={img} />
      <span className={styles.description}>
        <h1>{title}</h1>
        <p>{text}</p>
      </span>
    </div>
  );
};
