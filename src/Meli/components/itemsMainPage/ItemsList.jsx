import React from 'react'
import { Item } from './Item'

export const ItemsList = ({products}) => {
  return (
    products.map((prod)=> <Item
    key={prod.id}
    id={prod.id}
    name={prod.name}
    price={prod.price}
    category={prod.category}
    photo={prod.photo}
    envio={prod.envio}
    oferta={prod.oferta} 
    />)
  )
}
