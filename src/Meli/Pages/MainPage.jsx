import React from 'react'
import { Carrousel } from '../Layout/carrousel/Carrousel'
import { ItemsMain } from '../Layout/itemsMainPage/ItemsMain'
import { NavBar } from '../Layout/NavBar/NavBar'
import { Pagos } from '../Layout/Pagos/Pagos'

export const MainPage = () => {
  return (
    <>
      
      <NavBar/>
      <Carrousel/>
      <Pagos/>
      <ItemsMain/>
      <ItemsMain/>
    </>
  )
}
