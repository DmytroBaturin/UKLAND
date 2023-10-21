import styles from "./index.module.scss";
export const Card = ({ color, text, title, img }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.title}>
          {img}
          <h1>{title}</h1>
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
};
