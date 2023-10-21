import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { MobileNavbar } from "../MobileNavbar/index.jsx";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.root}>
      <span className={styles.navbar}>
        <Link to="/">
          <img src="./assets/logo.svg" width="80" height="70" />
        </Link>
        <span className={styles.menu}>
          <NavLink to="/news">Правила</NavLink>
          <a href="#">Вікі</a>
          <a href="#">Чому ми?</a>
          <img
            onClick={() => {
              setOpen(!open);
            }}
            width="40"
            src="assets/menu.svg"
          />
        </span>
      </span>
      {open && <MobileNavbar onClick={() => setOpen(!open)} />}
    </div>
  );
};
