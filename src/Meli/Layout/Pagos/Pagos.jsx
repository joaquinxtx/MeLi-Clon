import React from 'react'
import { Wrapper } from '../globales/styled.elements'
import { PagosContainer1, PagosContainer2, PagosDivA, PagosImg, PagosItems, VerMas } from './Pagos.element'

export const Pagos = () => {
  return (
    <PagosContainer1>
        <Wrapper>
            <PagosContainer2>
                <PagosItems>
                   <PagosImg src='	https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg'/>                     
                    <PagosDivA>
                        
                        Tarjeta de Credito
                        <VerMas>
                            Ver promociones Bancarias
                        </VerMas>
                    </PagosDivA>

                </PagosItems>
                <PagosItems>
                   <PagosImg src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg'/>                     
                   <PagosDivA>

                        Tarjeta de debito
                        <VerMas>
                            Ver mas
                        </VerMas>
                   </PagosDivA>

                </PagosItems>
                <PagosItems>
                    <PagosImg src='	https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg'/>
                   <PagosDivA>
                        Cuotas sin tarjeta
                        <VerMas>
                            Conoce Mercado Credito
                        </VerMas>
                   </PagosDivA>

                </PagosItems>
                <PagosItems>
                    <PagosImg src='	https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg'/>
                    <PagosDivA>
                        Efectivo
                        <VerMas>
                            Ver mas
                        </VerMas>
                    </PagosDivA>

                </PagosItems>
                <PagosItems>
                    <PagosImg src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg'/>
                </PagosItems>
            </PagosContainer2>
        </Wrapper>
    </PagosContainer1>
  )
}
