import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <header className="header">
        <p className="header__logo">TuDieta</p>

        <ul className="header__nav">
            <li>
                <NavLink className={({isActive}) => isActive ? "header__linkA" : "header__link"} to="Inicio"> Inicio </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "header__linkA" : "header__link"} to="Alimentos"> Crea Tu Dieta </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "header__linkA" : "header__link"} to="Blog"> Blog </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "header__linkA" : "header__link"} to="Contacto"> Contacto </NavLink>
            </li>
        </ul>
    </header>
  )
}

export default HeaderNav