import styled from 'styled-components'

export const BeneficiosContainerFlex =styled.div`
height: 266px;
overflow: hidden;
display: flex;
margin-top: 30px;

`
export const BeneficiosGradient = styled.div`
border-radius: 10px ;
bottom: 0;
height: 124px;
position: absolute;
width: 100%;
z-index: 2;
background:linear-gradient(0deg, rgb(60,3,78) 0%, rgba(60,3,78, 0.0001) 100%);
`
export const BeneficiosContainer =styled.div`
border-radius: 10px ;
width: 394px;
height: 250px;
display: block;
overflow: hidden;
position: relative;
text-align: center;
padding: 0 8px;
`

export const BeneficiosImgFondo =styled.img`
    border-radius: 10px ;
    display: block;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: top;
    object-position: top;
    position: absolute;
    width: 100%;

`

export const BeneficiosImgChica =styled.img`
-webkit-align-self: flex-end;
align-self: flex-end;
-webkit-border-radius: 6px;
border-radius: 6px;
display: -webkit-flex;
display: block;
max-height: 100%;
max-width: 100%;
min-width: 80px;
-o-object-fit: cover;
object-fit: cover;
overflow: hidden;

width: 110px;
height: 90px;

`
export const BeneficiosDivSpan=styled.div`
color: #fff;
display: block;
margin-left: 16px;
text-align: left;
`
export const BeneficiosContainerspan =styled.div`
    align-items: center;  
    box-sizing: border-box;
    display: -webkit-flex;
    display: flex;
    left: 0;
    padding: 16px;
    position: relative;
    width: 100%;
    z-index: 2;
    top: 110px;
`



export const BeneficiosSpan1 =styled.span`
font-size: 12px;
display: block;
font-weight: 600;
line-height: 1.33;
margin-bottom: 4px;
`


export const BeneficiosSpan2 =styled.span`
font-size: 22px;
font-weight: 600;
line-height: 1.09;
`


export const BeneficiosSpan3 =styled.span`
font-size: 18px;
letter-spacing: .4px;
line-height: 1.11;
margin-top: 4px;
`