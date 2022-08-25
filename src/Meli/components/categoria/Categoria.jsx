import React from "react";
import { Wrapper } from "../globales/styled.elements";
import { ItemsMainTitulo } from "../itemsMainPage/ItemsMain.elements";
import {
  CategoriaA,
  CategoriaContainer,
  CategoriaDobleA,
  CategoriaIcon,
  CategoriaP,
} from "./Categoria.Elements";
import { RiBearSmileLine } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";
import { TiDeviceDesktop } from "react-icons/ti";
import { BiFoodTag } from "react-icons/bi";
import { BiBall } from "react-icons/bi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import { BiGame } from "react-icons/bi";
import { GiLipstick } from "react-icons/gi";
import { BiMobileAlt } from "react-icons/bi";
import { BiPalette } from "react-icons/bi";
import { GiClothes } from "react-icons/gi";

export const Categoria = () => {
  return (
    <Wrapper>
      <ItemsMainTitulo>Categorias populares</ItemsMainTitulo>
      <CategoriaContainer>
        <CategoriaDobleA>
          <CategoriaA>
            <CategoriaIcon>
              <AiOutlineCar className="icon" />
            </CategoriaIcon>
            <CategoriaP>Autos motos y otros</CategoriaP>
          </CategoriaA>
          <CategoriaA>
            <CategoriaIcon>
              <TiDeviceDesktop className="icon" />
            </CategoriaIcon>
            <CategoriaP>computacion</CategoriaP>
          </CategoriaA>
        </CategoriaDobleA>
        <CategoriaDobleA>
          <CategoriaA>
            <CategoriaIcon>
              <BiFoodTag className="icon" />
            </CategoriaIcon>
            <CategoriaP>electrodomesticos</CategoriaP>
          </CategoriaA>
          <CategoriaA>
            <CategoriaIcon>
              <BiBall className="icon" />
            </CategoriaIcon>
            <CategoriaP>Deportes y fitness</CategoriaP>
          </CategoriaA>
        </CategoriaDobleA>
        <CategoriaDobleA>
          <CategoriaA>
            <CategoriaIcon>
              <MdOutlineMapsHomeWork className="icon" />
            </CategoriaIcon>
            <CategoriaP>inmuebles</CategoriaP>
          </CategoriaA>
          <CategoriaA>
            <CategoriaIcon>
              <GiLipstick className="icon" />
            </CategoriaIcon>
            <CategoriaP>belleza y cuidado personal</CategoriaP>
          </CategoriaA>
        </CategoriaDobleA>
        <CategoriaDobleA>
          <CategoriaA>
            <CategoriaIcon>
              <BiMobileAlt className="icon" />
            </CategoriaIcon>
            <CategoriaP>celulares y telefonos</CategoriaP>
          </CategoriaA>
          <CategoriaA>
            <CategoriaIcon>
              <RiBearSmileLine className="icon" />
            </CategoriaIcon>
            <CategoriaP>niños y jugeteria</CategoriaP>
          </CategoriaA>
        </CategoriaDobleA>
        <CategoriaDobleA>
          <CategoriaA>
            <CategoriaIcon>
              <GiClothes className="icon" />
            </CategoriaIcon>
            <CategoriaP>ropa y accesorios</CategoriaP>
          </CategoriaA>
          <CategoriaA>
            <CategoriaIcon>
              <BiBed className="icon" />
            </CategoriaIcon>
            <CategoriaP>hogar muebles y jardin</CategoriaP>
          </CategoriaA>
        </CategoriaDobleA>
        <CategoriaDobleA>
          <CategoriaA>
            <CategoriaIcon>
              <BiPalette className="icon" />
            </CategoriaIcon>
            <CategoriaP>accesorios para vehiculos</CategoriaP>
          </CategoriaA>
          <CategoriaA>
            <CategoriaIcon>
              <BiGame className="icon" />
            </CategoriaIcon>
            <CategoriaP> consolas y videojuegos</CategoriaP>
          </CategoriaA>
        </CategoriaDobleA>
      </CategoriaContainer>
    </Wrapper>
  );
};
