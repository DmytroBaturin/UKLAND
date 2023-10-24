import styles from "./index.module.scss";
import { useEffect } from "react";
export const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles.root}>
      <h1>Скоро😀</h1>
    </div>
  );
};
