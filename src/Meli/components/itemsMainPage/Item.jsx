import React from 'react'
import { ButtonItem, ButtonItemSvg, Item1, ItemContainer, ItemContainerA, ItemContainerDivAImg, ItemContainerImg, ItemContenido, ItemFull, ItemParagraph, ItemPrice, ItemSpanContain, ItemSpanPrice, ItemWrapper } from './Item.elements'
import { AiFillThunderbolt } from "react-icons/ai";
import cora from './img/cora.png'


export const Item = ({imagen,precio,envio,paragraf}) => {  
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
            <Item1 >
                <ItemContainerDivAImg>
                    <ItemContainerA>
                        <ButtonItem>
                            <ButtonItemSvg src={cora}/>
                       </ButtonItem>
                        <ItemContainerImg src={imagen} />
                    </ItemContainerA>
                </ItemContainerDivAImg>
                <ItemContenido>
                    <ItemPrice>
                        <ItemSpanPrice>
                            {precio}
                        </ItemSpanPrice>
                    </ItemPrice>
                    <ItemSpanContain>
                        <ItemFull>
                           {envio? 'Envio gratis':''}
                        </ItemFull>
                        
                        <AiFillThunderbolt style={color} />                       

                    </ItemSpanContain>
                    <ItemParagraph data-descr="small popups that appear when hovering">
                    {paragraf}
                    </ItemParagraph>
                    
                </ItemContenido>
            </Item1>
        </ItemWrapper>
    </ItemContainer>
    
    </>
  )
}
