import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../components/Header";

import { Contact, Home, NotFound, Product } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contact />} />
        <Route path="produto/:item" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
