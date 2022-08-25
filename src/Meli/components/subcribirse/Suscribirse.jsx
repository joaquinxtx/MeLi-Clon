import React from 'react'
import { Wrapper } from '../globales/styled.elements'
import {  ButtonSpan, ButtonSuscribirse, DivPlataformas, ImgPlataforma, Plataformas, Span1, SpanPlataforma, SubContainer, SubContainer1, SubContainer2, SubContainer3, SubDiv2Container1, SubDiv2Span, SubDiv2Span1, SubDiv2Span2, SubDivContainer1 } from './Suscribirse.elements'

export const Suscribirse = () => {
  return (
    <>
        <Wrapper>
            <SubContainer>
                <SubContainer1>
                    <SubDivContainer1>Suscribete al Nivel 6</SubDivContainer1>
                    <SubDiv2Container1>
                           
                        <SubDiv2Span1>
                            $1.439
                        </SubDiv2Span1>
                        <span>
                            <SubDiv2Span>
                                $499
                            </SubDiv2Span>
                            <SubDiv2Span2>
                                /mes
                            </SubDiv2Span2>
                        </span>
                    </SubDiv2Container1>
                </SubContainer1>



                <SubContainer2>
                    <Span1>Consegui los mejores benefivios en Mercado Libre y Mercado Pago</Span1>

                    <DivPlataformas>
                        <Plataformas>
                            <ImgPlataforma src='https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg'/>
                            <SpanPlataforma>
                                 Disney+ sin cargo
                            </SpanPlataforma>
                        </Plataformas>
                        <Plataformas>
                            <ImgPlataforma src='https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg'  />
                            <SpanPlataforma>
                                 Disney+ sin cargo
                            </SpanPlataforma>
                        </Plataformas>
                        <Plataformas>
                            <ImgPlataforma src='https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png' />
                            <SpanPlataforma>
                                Envíos gratis y rápidos desde $ 5.500 y 45% OFF en envíos de menos de $ 5.500
                            </SpanPlataforma>
                        </Plataformas>
                    </DivPlataformas>
                </SubContainer2>


                <SubContainer3>
                    <span></span>
                    <ButtonSuscribirse>
                        <ButtonSpan>Subcribete</ButtonSpan>
                    </ButtonSuscribirse>

                </SubContainer3>
            </SubContainer>
        </Wrapper>
    </>
  )
}
