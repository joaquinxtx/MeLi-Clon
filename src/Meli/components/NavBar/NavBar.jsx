import { BiChevronDown } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import {GoLocation } from "react-icons/go";
import {BsBell } from "react-icons/bs";

import { NavCategory, NavContainer, NavContainerCategory, NavContainerItemCategory, NavDirection, NavImgDisney, NavInput, NavItemsCategory, NavWrapper } from './NavBar.elment'


export const NavBar = () => {
  return (
    <NavContainer>
        <NavWrapper>
            <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus.png" alt="logo-meli" />
            <NavInput placeholder='Buscar poductos , marcas y mas...'/>           
            <NavImgDisney src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp" alt="imagen-disney" />
            
            
            <NavContainerCategory>

                <NavDirection>
                    <NavItemsCategory>
                    <GoLocation/>
                        enviar a Joquin toledo
                    </NavItemsCategory>
                        elena estevez
                </NavDirection>
                <NavContainerItemCategory>

                    <NavCategory>
                        <NavItemsCategory>
                            Categorias
                            <BiChevronDown/>
                        </NavItemsCategory>
                    </NavCategory>

                    <NavCategory>
                        <NavItemsCategory>
                            Ofertas
                        </NavItemsCategory>
                    </NavCategory>

                    <NavCategory>
                        <NavItemsCategory>
                            Historial
                        </NavItemsCategory>
                    </NavCategory>

                    <NavCategory>
                        <NavItemsCategory>
                            Supermercado
                        </NavItemsCategory>
                    </NavCategory>

                    <NavCategory>
                        <NavItemsCategory>
                            Moda
                        </NavItemsCategory>
                    </NavCategory>

                    <NavCategory>
                        <NavItemsCategory>
                            Vender
                        </NavItemsCategory>
                    </NavCategory>

                    <NavCategory>
                        <NavItemsCategory>
                            Ayuda
                        </NavItemsCategory>
                    </NavCategory>
                </NavContainerItemCategory>
                <NavCategory>
                        <NavItemsCategory>
                            <BiUserCircle/>
                            Joaquin
                            <BiChevronDown/>
                        </NavItemsCategory>
                    </NavCategory>

                    <NavCategory>
                        <NavItemsCategory>
                            Mis compras
                        </NavItemsCategory>
                    </NavCategory>

                    <NavCategory>
                        <NavItemsCategory>
                            Favoritos
                            <BiChevronDown/>
                        </NavItemsCategory>
                    </NavCategory>
                    <NavCategory>
                        <NavItemsCategory>
                            <BsBell/>
                        </NavItemsCategory>
                    </NavCategory>
                    <NavCategory>
                        <NavItemsCategory>
                           <HiOutlineShoppingCart/>
                        </NavItemsCategory>
                    </NavCategory>

            </NavContainerCategory>
        </NavWrapper>
    </NavContainer>
  )
}
