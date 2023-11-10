import React from "react";
import styles from "./index.module.scss";
import { useSpring, animated } from "@react-spring/web";

export const SocialCard = ({ text, title, img, href }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(20%)",
    reset: false,
    reverse: false,
  });

  const handleScroll = () => {
    const element = document.getElementById("socialCard");
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
    <animated.a
      target="_blank"
      className={styles.card}
      href={href}
      style={props}
      id="socialCard"
    >
      <img src={img} width="80px" />
      <animated.span className={styles.description}>
        <h1>{title}</h1>
        <p>{text}</p>
      </animated.span>
    </animated.a>
  );
};
