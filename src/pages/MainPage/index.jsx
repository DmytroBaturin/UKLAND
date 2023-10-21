import { Main } from "../../screens/Main/index.jsx";
import { Advantages } from "../../screens/Advantages/index.jsx";
import { Store } from "../../screens/Store/index.jsx";
import { Social } from "../../screens/Social/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";

export const MainPage = () => {
  return (
    <>
      <Main />
      <Advantages />
      <Store />
      <Social />
      <Footer />
    </>
  );
};
