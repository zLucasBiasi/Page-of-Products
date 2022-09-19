import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Produto } from "../pages/Produto";
import { Contact } from "../pages/Contato";

import { NotFound } from "../pages/NotFound";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contact />} />
        <Route path="produto/:item" element={<Produto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
