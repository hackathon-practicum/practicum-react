import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import logoMobile from "../images/logo_mobile.svg";

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <img src={logo} alt="Логотип Яндекс-Практикум" className="logo header__logo header__logo_type_desktop" />
                <img src={logoMobile} alt="Логотип Яндекс-Практикум" className="logo header__logo header__logo_type_mobile" />
                <nav className="header__nav">
                    <ul className="header__list">
                        <li><NavLink to="#" className="header__link">Определить роль</NavLink></li>
                        <li><NavLink to="#" className="header__link">Вакансии</NavLink></li>
                        <li><NavLink to="#" className="header__link">Отзывы</NavLink></li>
                        <li><NavLink to="#" className="header__link">FAQ</NavLink></li>
                    </ul>
                </nav>
                <NavLink to="#" className="header__button header__button_type_mobile">Кого мы тщем</NavLink>
            </div>
        </header>
    )
}
