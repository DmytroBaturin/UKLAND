import { Main } from "../../screens/Main/index.jsx";
import { Advantages } from "../../screens/Advantages/index.jsx";
import { Store } from "../../screens/Store/index.jsx";
import { Social } from "../../screens/Social/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { useEffect } from "react";

export const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Main />
      <Advantages />
      <Store />
      <Social />
    </>
  );
};
