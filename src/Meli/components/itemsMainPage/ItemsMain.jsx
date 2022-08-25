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
            <Item 
            imagen='https://http2.mlstatic.com/D_Q_NP_801112-MLA46516512347_062021-AB.webp'
            precio='473.000'
            envio={true}
            paragraf='cpu procesador intel core 7 muy buena marca'
            />
            <Item 
            imagen='https://http2.mlstatic.com/D_Q_NP_871808-MLA49384762009_032022-AB.webp'
            precio='300.000'
            envio={true}
            paragraf='cpu procesador intel core 7 muy buena marca'
            />
            <Item 
            imagen='	https://http2.mlstatic.com/D_Q_NP_828409-MLA49695242055_042022-AB.webp'
            precio='203.000'
            envio={true}
            paragraf='cpu procesador intel core 7 muy buena marca'
            />
            <Item 
            imagen='https://http2.mlstatic.com/D_Q_NP_811351-MLA48463373361_122021-AB.webp'
            precio='223.000'
            envio={true}
            paragraf='cpu procesador intel core 7 muy buena marca'
            />
            <Item 
            imagen='https://http2.mlstatic.com/D_Q_NP_871808-MLA49384762009_032022-AB.webp'
            precio='303.000'
            envio={true}
            paragraf='cpu procesador intel core 7 muy buena marca'
            />
            <Item 
            imagen='https://http2.mlstatic.com/D_Q_NP_951326-MLA51194986817_082022-AB.webp'
            precio='230.000'
            envio={true}
            paragraf='cpu procesador intel core 7 muy buena marca'
            />
            
        </ItemsMainContainer>

    </Wrapper>
    </>
  )
}
