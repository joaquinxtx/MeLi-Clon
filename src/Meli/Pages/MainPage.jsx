import { Beneficios } from "../components/beneficios/Beneficios"
import { Carrousel } from "../components/carrousel/Carrousel"
import { Categoria } from "../components/categoria/Categoria"
import { ItemsMain } from "../components/itemsMainPage/ItemsMain"
import { NavBar } from "../components/NavBar/NavBar"
import { Pagos } from "../components/Pagos/Pagos"
import { Publicidad } from "../components/publicidad/Publicidad"
import { Suscribirse } from "../components/subcribirse/Suscribirse"


export const MainPage = () => {
  return (
    <>
      
      <NavBar/>
      <Carrousel/>
      <Pagos/>
      <ItemsMain/>
      <Suscribirse/>
      <Beneficios/>
      <Publicidad/>
      <Categoria/>
      
      
    </>
  )
}
