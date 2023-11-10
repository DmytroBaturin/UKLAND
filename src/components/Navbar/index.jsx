import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import { MobileNavbar } from "../MobileNavbar/index.jsx";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbar = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {});
    const handleResize = () => {
      setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div ref={navbar} className={styles.root}>
      <span className={styles.navbar}>
        <Link to="/">
          <img src="./assets/logo.svg" width="80" height="70" />
        </Link>
        <span className={styles.menu}>
          <NavLink to="/rules">Правила</NavLink>
          <NavLink to="/wiki">Вікі</NavLink>
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
