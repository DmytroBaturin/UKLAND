import React from "react";
import styles from "./index.module.scss";
import { Card } from "../../components/Cards";
import { cloud } from "../../../public/assets/cards/cloud.jsx";
import { game } from "../../../public/assets/cards/game.jsx";
import { heart } from "../../../public/assets/cards/heart.jsx";
import { useTrail, animated } from "@react-spring/web";

export const Advantages = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const trail = useTrail(3, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(20%)",
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { opacity: 0, transform: "translateY(20%)" },
    reset: false,
    reverse: false,
  });

  const handleScroll = () => {
    const element = document.getElementById("advantages");
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
    <div id="advantages">
      <span className={styles.title}>
        <h1>Наші переваги</h1>
        <img src={"./assets/beeGif.gif"} />
      </span>
      <div className={styles.container}>
        {trail.map((props, index) => (
          <animated.div key={index} style={props}>
            {index === 0 && (
              <Card
                color={""}
                img={heart()}
                text="Сервер має активне та дружнє гравецьке ком'юніті: гравці можуть спілкуватися, об'єднуватися у клани, і взагалі насолоджуватися грою в приємній компанії. Гарна спільнота робить ігровий досвід більш насиченим і цікавим."
                title="Ком'юніті"
              />
            )}
            {index === 1 && (
              <Card
                color={""}
                img={game()}
                text="Наш сервер використовує найсучасніше обладнання та інфраструктуру для забезпечення стабільної роботи сервера. Гарантована низька затримка і висока продуктивність гарантують приємний геймплей без лагів."
                title="Комфорт"
              />
            )}
            {index === 2 && (
              <Card
                color={""}
                img={cloud()}
                text="Адміністрація сервера постійно додає новий зміст і розробляє сервер. Це означає, що гравці можуть очікувати нові режими гри, предмети, події, і багато іншого, щоб зберегти інтерес та розвагу на сервері."
                title="Актив"
              />
            )}
          </animated.div>
        ))}
      </div>
    </div>
  );
};
