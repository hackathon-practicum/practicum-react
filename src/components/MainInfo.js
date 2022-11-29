import { NavLink } from 'react-router-dom';
import arrowRight from '../images/arrowRight.png';
import girlPic from '../images/girlPic.png';
import lineLeft from '../images/lineLeft.png';
import star from '../images/Star.png';
import man1 from '../images/man1.png';
import lineRight from '../images/lineRight.png';
import men from '../images/men.png';
import lineBottom from '../images/lineBottom.png';
import man2 from '../images/man2.png';

export default function MainInfo() {

  return (
    <section className="main-info">
      <div className="main-info__first-row">
        <div className='main-info__top-left-container'>
          <img src={girlPic} alt="" className='main-info__girl-pic'/>
          <img src={lineLeft} alt="" className='main-info__line-left'/>
        </div>
        <div className='main-info__text-container'>
          <div className='main-info__stars'>
            <img src={star} alt='звезда' className='main-info__star'/>
            <img src={star} alt='звезда' className='main-info__star'/>
            <img src={star} alt='звезда' className='main-info__star'/>
            <img src={star} alt='звезда' className='main-info__star'/>
            <img src={star} alt='звезда' className='main-info__star'/>
          </div>
          <div className="main-info__text-container">
          <h2 className="title">Это</h2>
          <div className="main-info__animation">
            <img src={arrowRight} alt="Стрелка направление" className='arrow'/>
            <img src={arrowRight} alt="Стрелка направление" className='arrow'/>
            <img src={arrowRight} alt="Стрелка направление" className='arrow'/>
          </div>
          <h2 className="title">чем работа</h2>
          <h4 className="section__subtitle main-info__section__subtitle">
            Стань частью команды Практикума. Делись своим опытом и получай дополнительный доход
          </h4>
          <NavLink to="#" className="button-cta main-info__button-cta">Начать делиться знаниями</NavLink>
        </div>
        </div>
        <div className='main-info__top-right-container'>
          <img src={man1} alt='' className='main-info__man1'/>
          <img src={lineRight} alt='' className='main-info__line-right'/>
        </div>
      </div>
      <div className="main-info__second-row">
        <div className="main-info__bottom-left-container">
          <img src={star} alt='звезда' className='main-info__star'/>
          <img src={men} alt='мужчина' className='main-info__men'/>
        </div>
        <div className='main-info__bottom-center-container'>
          <img src={star} alt='звезда' className='main-info__star'/>
          <img src={lineBottom} alt='косая линия' className='main-info__line-bottom'/>
        </div>
        <div className='main-info__bottom-right'>
          <img src={star} alt='звезда' className='main-info__star'/>
          <img src={man2} alt='мужчины' className='main-info__man2' />
        </div>
      </div>
    </section>
  )
}
