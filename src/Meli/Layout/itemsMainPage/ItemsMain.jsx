import React from 'react'
import { Wrapper } from '../globales/styled.elements'
import { VerMas } from '../Pagos/Pagos.element'
import { Item } from './Item'
import { ItemsMainA, ItemsMainContainer, ItemsMainTitulo } from './ItemsMain.elements'

export const ItemsMain = () => {
  return (
    <>
    <Wrapper>
        <ItemsMainTitulo>
            Basado en Tu ultima vista
        </ItemsMainTitulo>
        <ItemsMainA>
            Ver Historial
        </ItemsMainA>
        <ItemsMainContainer>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            
        </ItemsMainContainer>

    </Wrapper>
    </>
  )
}
