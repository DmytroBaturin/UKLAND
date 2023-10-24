import "./global.scss";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/index.jsx";
import { NewsPage } from "./pages/NewsPage";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<MainPage />} path="/"></Route>
        <Route element={<NewsPage />} path="/news"></Route>
        <Route element={<NewsPage />} path="/wiki"></Route>
        <Route element={<NewsPage />} path="/why"></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
