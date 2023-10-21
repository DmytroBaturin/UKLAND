import styles from "./index.module.scss";

export const Button = ({ onClick, img, text = "Click", style }) => {
  return (
    <>
      <button onClick={onClick} className={styles.root} style={style}>
        {img}
        {text}
      </button>
    </>
  );
};
