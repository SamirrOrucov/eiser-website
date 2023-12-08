import "./App.css";
import BasketPage from "./page/BasketPage";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
