import { NavLink } from 'react-router-dom';
import arrowWhite from '../images/arrowWhite.png';

export default function MainInfo() {

  return (
    <section className="main-info">
        <div className="main-info__text-container">
        <h1 className="title title_main-info">
          Это
          <img src={arrowWhite} alt="Стрелка направление" className='arrow'/>
          <img src={arrowWhite} alt="Стрелка направление" className='arrow'/>
          <img src={arrowWhite} alt="Стрелка направление" className='arrow'/>
          чем работа
        </h1>
          <p className="section__subtitle main-info__section__subtitle">
            Стань частью команды Практикума. Делись своим опытом и получай дополнительный доход
          </p>
          <NavLink to="#" className="button-cta main-info__button-cta">Начать делиться знаниями</NavLink>
        </div>
    </section>
  )
}
