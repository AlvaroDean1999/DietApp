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
                <NavLink className={({isActive}) => isActive ? "header__linkA" : "header__link"} to="Recetas"> Recetas </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "header__linkA" : "header__link"} to="Dieta"> Dieta </NavLink>
            </li>
        </ul>
    </header>
  )
}

export default HeaderNav