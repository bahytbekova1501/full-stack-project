import React from 'react'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import { Route, Routes } from 'react-router-dom'

function MainRoute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default MainRoute