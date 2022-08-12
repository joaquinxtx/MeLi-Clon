import React from 'react'
import { ButtonItem, ButtonItemSvg, Item1, ItemContainer, ItemContainerA, ItemContainerDivAImg, ItemContainerImg, ItemContenido, ItemFull, ItemParagraph, ItemPrice, ItemSpanContain, ItemSpanPrice, ItemWrapper } from './Item.elements'
import { AiFillThunderbolt } from "react-icons/ai";
import cora from './img/cora.png'


export const Item = () => {  
        const color ={
            fill: "#00a650",
            height: "22px",
            paddingLeft: "5px",
            width: "40px",
        } 
  return (
    <>
    <ItemContainer>
        <ItemWrapper>
            <Item1>
                <ItemContainerDivAImg>
                    <ItemContainerA>
                        <ButtonItem>
                            <ButtonItemSvg src={cora}/>
                       </ButtonItem>
                        <ItemContainerImg src='	https://http2.mlstatic.com/D_Q_NP_871808-MLA49384762009_032022-AB.webp'/>
                    </ItemContainerA>
                </ItemContainerDivAImg>
                <ItemContenido>
                    <ItemPrice>
                        <ItemSpanPrice>
                            23.000$
                        </ItemSpanPrice>
                    </ItemPrice>
                    <ItemSpanContain>
                        <ItemFull>
                            Envio Gratis
                        </ItemFull>
                        
                        <AiFillThunderbolt style={color} />                       

                    </ItemSpanContain>
                    <ItemParagraph data-descr="small popups that appear when hovering">
                    small popups that appear when hovering
                    </ItemParagraph>
                    
                </ItemContenido>
            </Item1>
        </ItemWrapper>
    </ItemContainer>
    
    </>
  )
}
