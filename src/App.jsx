import "./global.scss";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/index.jsx";
import { RulePage } from "./pages/RulePage";
import { Footer } from "./components/Footer";
import { SoonPage } from "./pages/SoonPage";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<MainPage />} path="/"></Route>
        <Route element={<RulePage />} path="/rules"></Route>
        <Route element={<SoonPage />} path="/wiki"></Route>
        <Route element={<SoonPage />} path="/why"></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
