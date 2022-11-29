import { NavLink } from 'react-router-dom';
import arrowRight from '../images/arrowRight.png';

export default function MainInfo() {

  return (
    <section className="main-info">
      <div className="main-info__first-row">
        <img className="main-info__image1" src="#" alt="" />
        <div className="main-info__text-container">
          <h2 className="title">Стань частью команды Практикума</h2>
          <h4 className="section__subtitle main-info__section__subtitle">Делись своим опытом и получай дополнительный доход</h4>
          <NavLink to="#" className="button-cta main-info__button-cta">Начать делиться знаниями</NavLink>
        </div>
        <div className="main-info__text-arrow-container">
          <div className="main-info__animation">
            <img src={arrowRight} alt="Стрелка направление" className='arrow'/>
            <img src={arrowRight} alt="Стрелка направление" className='arrow'/>
            <img src={arrowRight} alt="Стрелка направление" className='arrow'/>
            <img src={arrowRight} alt="Стрелка направление" className='arrow'/>
            <img src={arrowRight} alt="Стрелка направление" className='arrow'/>
          </div>
          <p className="main-info__text-arrow">чем работа</p>
        </div>
      </div>
      <div className="main-info__second-row">
        <img className="main-info__image2" src="#" alt="" />
        <img className="main-info__image3" src="#" alt="" />
      </div>
    </section>
  )
}
