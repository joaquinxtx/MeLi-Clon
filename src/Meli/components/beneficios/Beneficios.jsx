import React from 'react'
import { Wrapper } from '../globales/styled.elements'
import { ItemsMainA, ItemsMainTitulo } from '../itemsMainPage/ItemsMain.elements'
import { BeneficiosContainer, BeneficiosContainerFlex, BeneficiosContainerspan, BeneficiosDivSpan, BeneficiosGradient, BeneficiosImgChica, BeneficiosImgFondo, BeneficiosSpan1, BeneficiosSpan2, BeneficiosSpan3 } from './Beneficios.elemnts'

export const Beneficios = () => {
  return (
    <Wrapper>
        <ItemsMainTitulo>
            Basado de Mercado Puntos
        </ItemsMainTitulo>
        <ItemsMainA>
            Ver todos los beneficios
        </ItemsMainA>

        <BeneficiosContainerFlex>
            <BeneficiosContainer>
                <BeneficiosGradient/>
                <BeneficiosImgFondo src='https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget/disney-nivel6-mla-mco-mlm@2x.png'/>
                <BeneficiosContainerspan>                   
                        <BeneficiosImgChica src='https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg'/>
                        <BeneficiosDivSpan>
                            <BeneficiosSpan1>Sin Cargo con el nivel 6</BeneficiosSpan1>
                            <BeneficiosSpan2>Disney+ y Start+</BeneficiosSpan2>
                            <BeneficiosSpan3></BeneficiosSpan3>
                        </BeneficiosDivSpan>      
                </BeneficiosContainerspan>  

            </BeneficiosContainer>

            <BeneficiosContainer>
                <BeneficiosGradient/>
                <BeneficiosImgFondo src='https://http2.mlstatic.com/resources/frontend/statics/loyal/hbo/widget/hbo-max-mla-mlc-mco-v2@2x.jpg'/>
                <BeneficiosContainerspan>
                    <BeneficiosImgChica src='https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1'/>
                    <BeneficiosDivSpan>
                        <BeneficiosSpan1>Sin Cargo con el nivel 6</BeneficiosSpan1>
                        <BeneficiosSpan2>Disney+ y Start+</BeneficiosSpan2>
                        <BeneficiosSpan3></BeneficiosSpan3>
                    </BeneficiosDivSpan>
                </BeneficiosContainerspan>  
            </BeneficiosContainer>

            <BeneficiosContainer>
                <BeneficiosGradient/>
                <BeneficiosImgFondo src='https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/widget/paramount-mla-mlc@2x.jpg'/>
                <BeneficiosContainerspan>
                    <BeneficiosImgChica src='https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png'/>
                    <BeneficiosDivSpan>
                        <BeneficiosSpan1>Sin Cargo con el nivel 6</BeneficiosSpan1>
                        <BeneficiosSpan2>Disney+ y Start+</BeneficiosSpan2>
                        <BeneficiosSpan3></BeneficiosSpan3>
                    </BeneficiosDivSpan>
                </BeneficiosContainerspan>  
            </BeneficiosContainer>
        </BeneficiosContainerFlex>
    </Wrapper>
  )
}
