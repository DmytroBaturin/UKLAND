import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

export const MobileNavbar = ({ onClick }) => {
  return (
    <div className={styles.root}>
      <span className={styles.menu}>
        <NavLink onClick={() => onClick()} to="/news">
          Правила
        </NavLink>
        <NavLink onClick={() => onClick()} to="/wiki">
          Вікі
        </NavLink>
        <NavLink onClick={() => onClick()} to="/why">
          Чому ми?
        </NavLink>
      </span>
    </div>
  );
};
