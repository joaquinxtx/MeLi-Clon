import styled from "styled-components";

export const ItemContainer = styled.div`
  height: 330px;
  width: 240px;
`;
export const ItemWrapper = styled.div`
  height: 314px;
  margin: 0 8px 16px;
  width: 224px;
`;
export const Item1 = styled.div`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%),
    0 -1px 2px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%);
  color: #333;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  margin: 0 8px 16px;
  position: relative;
  text-decoration: none;
  z-index: 1;
 

  &:hover::after {
    
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%),
      0 1px 3px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
    content: "";
    height: 100%;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    top: 0;
    -webkit-transition: opacity 0.18s ease-out;
    transition: opacity 0.18s ease-out;
    width: 100%;
    will-change: opacity;
    z-index: -1;
  }
  &:hover p,
  :hover button {
    transition: .6s all;
    display: block;
    opacity: 1;
  }
`;
export const ItemContainerDivAImg = styled.div`
  height: 224px;
  width: 224px;
`;
export const ItemContainerA = styled.a`
  cursor: pointer;

  position: absolute;
  text-decoration: none;
  width: 100%;
  z-index: 1;
`;
export const ItemContainerImg = styled.img`
  height: 224px;
  width: 224px;
`;
export const ItemContenido = styled.div`
  border-top: 1px solid rgba(51, 51, 51, 0.1);
  padding: 20px 16px 0;
  position: relative;
`;

export const ItemPrice = styled.div`
  margin-top: -2px;
  -webkit-transition:  0.9s ease-out;
  transition:0.9s ease-out;
`;

export const ItemSpanPrice = styled.span`
  color: #333;
  font-size: 24px;
  line-height: 1.2;
  padding-right: 10px;
`;
export const ItemSpanContain = styled.div`
  display: flex;
  opacity: 1;
`;

export const ItemFull = styled.p`
  color: var(--green);
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  margin: 2px 0 15px;

`;

export const ItemParagraph = styled.p`
  color: #666;
  font-size: 12px;
  margin-top: 10px;
  font-weight: 100;
  line-height: 1.3;
  overflow: hidden;
  display: none;
  opacity: 0;
  -webkit-transition: 0.1s ease-out;
  transition: 1s ease-out;
  -webkit-transition-property: opacity, top;
  transition-property: opacity, top;
  -webkit-transition: visibility 0s;
  transition: visibility 0s;
`;
export const ButtonItem = styled.button`
  background-color: #ebebeb98;
  border: none;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  cursor: pointer;
  height: 36px;
  opacity: 0;
  padding: 0;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 36px;
  z-index: 2;

  &:focus img {
    width: 24px;
    height: 26px;
  }
`;
export const ButtonItemSvg = styled.img`
  z-index: 3;
  width: 18px;
  height: 20px;
`;
