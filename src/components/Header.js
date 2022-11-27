import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Яндекс-Практикум" className="logo header__logo" />
      <nav className="header__nav">
        <ul className="header__list">
          <li><NavLink to="#" className="header__link">Определить роль</NavLink></li>
          <li><NavLink to="#" className="header__link">Вакансии</NavLink></li>
          <li><NavLink to="#" className="header__link">Отзывы</NavLink></li>
          <li><NavLink to="#" className="header__link">FAQ</NavLink></li>
        </ul>
      </nav>
      <NavLink to="#" className="header__button">Кого мы тщем</NavLink>
    </header>
  )
}
