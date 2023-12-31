import styles from "./index.module.scss";
import { Button } from "../Button/index.jsx";
import { play } from "../../../public/assets/play.jsx";
import { copy } from "../../../public/assets/copy.jsx";
import { season } from "../../../public/assets/forms/season.jsx";
import { controller } from "../../../public/assets/forms/play.jsx";
import { money } from "../../../public/assets/forms/money.jsx";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modalSlice.jsx";
import { useState } from "react";
import { onClickCopy } from "../../hooks/copyhook.js";
export const Form = () => {
  const [copying, setCopy] = useState(false);
  const modalState = useSelector((state) => state.modalController.open);
  const dispatch = useDispatch();
  const onClickModal = () => {
    dispatch(openModal(!modalState));
    console.log(modalState);
  };
  const buttonBuy = {
    background:
      "linear-gradient(99deg, #7F00FF -35.73%, #4A00E0 55.66%, #6F37E0 159.22%)",
  };
  const [buttonCopy, setButtonCopy] = useState({
    background: "none",
    border: "1px solid white",
  });
  return (
    <div className={styles.root}>
      <div className={styles.price}>
        <span>
          <h1>50₴</h1>
          <p>на місяць</p>
        </span>
        <div className={styles.buttons}>
          <Button
            onClick={() => onClickModal()}
            img={play()}
            text="Почати грати"
            style={buttonBuy}
          />
          <Button
            img={copy()}
            onClick={() => onClickCopy(copying, setButtonCopy, setCopy)}
            text="Скопіювати IP"
            style={buttonCopy}
          />
        </div>
      </div>
      <div className={styles.about}>
        <div>
          <span>
            <div className={styles.title}>
              {money()}
              <h1>Про оплату</h1>
            </div>
            <p>
              Оплата йде на рахунок monobank-у, спочатку оплата за вказаною
              ціною, потім прохідка...
            </p>
          </span>
        </div>
        <div>
          <span>
            <div className={styles.title}>
              {season()}
              <h1>Про сезони</h1>
            </div>
            <p>
              Зміна сезонів відбувається регулярно, конкретних дат ми не маємо,
              але гарантуємо, що на одному сезоні Вам вистачить часу для
              комфортної гри
            </p>
          </span>
        </div>
        <div>
          <span>
            <div className={styles.title}>
              {controller()}
              <h1>Про гру</h1>
            </div>
            <p>
              Ми маємо гарний хостинг, навіть при великому онлайні Вам буде
              комфортно грати!{" "}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
