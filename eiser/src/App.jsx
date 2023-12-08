import "./App.css";
import CardDetail from "./components/CardDetail";
import BasketPage from "./page/BasketPage";
import DetailPage from "./page/DetailPage";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<BasketPage />} />
          {/* <Route path="/detail/:id" element={<CardDetail />} /> */}
          <Route path="/detail/:id" element={<DetailPage />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
