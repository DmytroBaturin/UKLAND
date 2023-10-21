import styles from "./index.module.scss";
import { game } from "../../../public/assets/cards/game.jsx";
import { Card } from "../../components/Cards";
import { cloud } from "../../../public/assets/cards/cloud.jsx";
import { heart } from "../../../public/assets/cards/heart.jsx";
export const Advantages = () => {
  return (
    <>
      <span className={styles.title}>
        <h1>Наші переваги</h1>
        <img src={"./assets/beeGif.gif"} />
      </span>
      <div className={styles.container}>
        <Card
          color={""}
          img={heart()}
          text="UKLAND має активну та дружню гравецьку ком'юніті. Гравці можуть спілкуватися, об'єднуватися у клани, і взагалі насолоджуватися грою в приємній компанії. Гарна спільнота робить ігровий досвід більш насиченим і цікавим."
          title="Ком'юніті"
        />
        <Card
          color={""}
          img={game()}
          text="UKLAND використовує найсучасніше обладнання та інфраструктуру для забезпечення стабільної роботи сервера. Гарантована низька затримка і висока продуктивність гарантують приємний геймплей без лагів."
          title="Стабільність"
        />
        <Card
          color={""}
          img={cloud()}
          text="Адміністрація сервера постійно додає новий зміст і розробляє сервер. Це означає, що гравці можуть очікувати нові режими гри, предмети, події, і багато іншого, щоб зберегти інтерес та розвагу на сервері."
          title="Оновлення"
        />
      </div>
    </>
  );
};
