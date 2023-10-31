import { onClickCopy } from "../../hooks/copyhook.js";
import styles from "./index.module.scss";
import { Button } from "../../components/Button";
import { play } from "../../../public/assets/play.jsx";
import { copy } from "../../../public/assets/copy.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../components/Modal/index.jsx";
import { openModal } from "../../store/modalSlice.jsx";
import { useEffect, useState } from "react";
export const Main = () => {
  const [copying, setCopy] = useState(false);
  const [buttonCopy, setButtonCopy] = useState({
    background: "none",
    border: "1px solid white",
  });

  const buttonBuy = {
    background:
      "linear-gradient(99deg, #7F00FF -35.73%, #4A00E0 55.66%, #6F37E0 159.22%)",
  };

  const modalState = useSelector((state) => state.modalController.open);
  const dispatch = useDispatch();

  const onClickModal = () => {
    dispatch(openModal(!modalState));
    console.log(modalState);
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch(openModal(false));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.root}>
      {modalState && (
        <Modal
          onClick={() => {
            onClickModal();
          }}
        />
      )}

      <div className={styles.main}>
        <img style={styles.logos} src="/assets/logo.svg" />
        <div className={styles.buttons}>
          <Button
            onClick={() => onClickModal()}
            img={play()}
            text="Почати грати"
            style={buttonBuy}
          />
          <Button
            onClick={() => onClickCopy(copying, setButtonCopy, setCopy)}
            img={copy()}
            text="Скопіювати IP"
            style={buttonCopy}
          />
        </div>
        <p>Приватний україномовний сервер на версії Minecraft 1.20.x</p>
      </div>
    </div>
  );
};
