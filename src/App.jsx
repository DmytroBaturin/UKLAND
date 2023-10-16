import { Main } from "./pages/Main";
import "./global.scss";
import { Advantages } from "./pages/Advantages";
import { Store } from "./pages/Store";
import { Social } from "./pages/Social/index.jsx";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Main />
      <Advantages />
      <Store />
      <Social />
      <Footer />
    </>
  );
}

export default App;
