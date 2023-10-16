import styles from "./index.module.scss";
import { Form } from "../../components/Form";
export const Store = () => {
  return (
    <>
      <span className={styles.title}>
        <h1>Купити прохідку</h1>
        <img src={"./assets/fishGif.gif"} />
      </span>
      <div className={styles.container}>
        <Form />
      </div>
    </>
  );
};
