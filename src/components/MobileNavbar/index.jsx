import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

export const MobileNavbar = ({ onClick }) => {
  return (
    <div className={styles.root}>
      <span className={styles.menu}>
        <NavLink onClick={() => onClick()} to="/news">
          Правила
        </NavLink>
        <a onClick={() => onClick()} href="#">
          Вікі
        </a>
        <a onClick={() => onClick()} href="#">
          Чому ми?
        </a>
      </span>
    </div>
  );
};
