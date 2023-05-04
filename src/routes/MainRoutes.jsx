import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import CreateProductPage from "../pages/CreateProductPage";

// import CustomPage from "../pages/CustomPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateProductPage />} />
      </Route>
      {/* <Route path="/custom" element={<CustomPage />} /> */}
    </Routes>
  );
}

export default MainRoutes;
