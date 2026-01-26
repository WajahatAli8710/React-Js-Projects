// import React from "react";
import Products from "./pages/Products/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

const App = () => {
  return (
    <div className="app">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
     </Routes>
    </div>
  );
};

export default App;
