import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import CreateProductPage from "../pages/CreateProductPage";
import CreatePage from "../pages/CreatePage";
import CustomYellow from "../pages/CustomYellow";
import ProductPage from "pages/ProductPage";
import AddProductPage from "pages/AddProductPage";
import CustomPage from "pages/CustomPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateProductPage />} />

        <Route path="/products" element={<ProductPage />} />
      </Route>
      <Route path="/add" element={<AddProductPage />} />
      <Route path="/custom" element={<CustomPage />} />
      <Route path="/customyellow" element={<CustomYellow />} />
    </Routes>
  );
}

export default MainRoutes;
