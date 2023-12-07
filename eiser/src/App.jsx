import './App.css'
import Basket from './components/Basket';
import Home from './page/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
