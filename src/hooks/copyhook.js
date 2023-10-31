export const onClickCopy = (copying, setButtonCopy, setCopy) => {
  if (!copying) {
    navigator.clipboard.writeText("ukland.pp.ua");
    setCopy(true);
    setButtonCopy((prevState) => {
      return {
        ...prevState,
        background: "rgba(107, 220, 51, 0.25)",
      };
    });
    setTimeout(() => {
      setCopy(false);
      setButtonCopy((prevState) => {
        return {
          ...prevState,
          background: "none",
        };
      });
    }, 1000);
  } else if (copying) {
    return 0;
  }
};
