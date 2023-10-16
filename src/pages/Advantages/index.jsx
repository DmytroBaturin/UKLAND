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
          text="Lorem ipsum dolor sit e vitae non lectus enim ut volutpat. Nibh feugiat ridiculus sed tortor cras id malesuada curabitur felis.
 Cursus platea enim volutpat cumsan egestas sed enim vel lectus nunc."
          title="Lorem Ipsum"
        />
        <Card
          color={""}
          img={game()}
          text=" Lorem ipsum dolor sit amet consectetur. Vitae vitae non lectus enim ut volutpat. Nibh feugiat ridiculus sed tortor cras id malesuada curabitur felis.

 Cursus platea enim volutpat leo pellentesque nulla placerat pellentesque. Accumsan egestas sed enim vel lectus nunc."
          title="Lorem Ipsum"
        />
        <Card
          color={""}
          img={cloud()}
          text=" Lorem ipsum dolor sit amet consectetur. Vitae vitae non lectus enim ut volutpat. Nibh feugiat ridiculus sed tortor cras id malesuada curabitur felis.

 Cursus platea enim volutpat leo pellentesque nulla placerat pellentesque. Accumsan egestas sed enim vel lectus nunc."
          title="Lorem Ipsum"
        />
      </div>
    </>
  );
};
