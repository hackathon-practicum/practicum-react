import logo from "../images/logo.svg";
import logoMobile from "../images/logo_mobile.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="#">
          <img
            src={logo}
            alt="Логотип Яндекс-Практикум"
            className="logo header__logo header__logo_type_desktop"
          />
          <img
            src={logoMobile}
            alt="Логотип Яндекс-Практикум"
            className="logo header__logo header__logo_type_mobile"
          />
        </a>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <a href="/#chatbot" className="header__link">
                Определить роль
              </a>
            </li>
            <li>
              <a href="/#vacancy" className="header__link">
                Вакансии
              </a>
            </li>
            <li>
              <a href="/#description" className="header__link">
                Отзывы
              </a>
            </li>
            <li>
              <a href="/#faq" className="header__link">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#vacancy"
          className="header__button header__button_type_mobile">
          Кого мы ищем
        </a>
      </div>
    </header>
  );
}
