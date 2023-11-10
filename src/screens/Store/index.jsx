import React from "react";
import styles from "./index.module.scss";
import { Form } from "../../components/Form";
import { useSpring, animated } from "@react-spring/web";

export const Store = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(20%)",
  });

  const handleScroll = () => {
    const element = document.getElementById("store");
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="store" className={styles.store}>
      <animated.span className={styles.title} style={props}>
        <h1>Купити прохідку</h1>
        <img src={"./assets/fishGif.gif"} />
      </animated.span>
      <animated.div className={styles.container} style={props}>
        <Form />
      </animated.div>
    </div>
  );
};
