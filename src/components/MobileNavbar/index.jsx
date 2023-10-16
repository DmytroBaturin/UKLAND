import styles from "./index.module.scss";

export const MobileNavbar = () => {
  return (
    <div className={styles.root}>
      <span className={styles.menu}>
        <a href="#">Правила</a>
        <a href="#">Вікі</a>
        <a href="#">Чому ми?</a>
      </span>
    </div>
  );
};
