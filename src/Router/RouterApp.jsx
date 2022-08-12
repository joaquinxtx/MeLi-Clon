
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CartPage } from '../Meli/Pages/CartPage'
import { DetailPage } from '../Meli/Pages/DetailPage'
import { MainPage } from '../Meli/Pages/MainPage'
import { ProductsPages } from '../Meli/Pages/ProductsPages'

export const RouterApp = () => {
  return (
    <Routes>

        <Route path='/' element={<MainPage/>} />
        <Route path='/detail' element={<DetailPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/product' element={<ProductsPages/>} />
        
        <Route path='/*' element={<Navigate to='/' />} />


    </Routes>
  )
}
