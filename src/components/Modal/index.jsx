import styles from "./index.module.scss";
export const Modal = ({ onClick }) => {
  return (
    <div className={styles.modalwraper}>
      <div className={styles.modal}>
        <img width="30" src="assets/close.svg" onClick={onClick} />
        <div className={styles.info}>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae vitae non lectus enim
            ut volutpat. Nibh feugiat ridiculus sed tortor cras id malesuada
            curabitur felis. Cursus platea enim volutpat leo pellentesque nulla
            placerat pellentesque. Accumsan egestas sed enim vel lectus nunc.
          </p>
        </div>
        <button>Подати заявку</button>
      </div>
    </div>
  );
};
