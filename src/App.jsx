
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import ProdottoDettaglio from "./pages/ProdottoDettaglio";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/prodotti/:id" element={<ProdottoDettaglio />} />
      </Routes>
    </BrowserRouter>
  );
}

