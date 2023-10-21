import "./global.scss";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/index.jsx";
import { NewsPage } from "./pages/NewsPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<MainPage />} path="/"></Route>
        <Route element={<NewsPage />} path="/news"></Route>
      </Routes>
    </>
  );
}

export default App;
