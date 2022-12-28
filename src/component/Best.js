import { ButtonMain } from "./ButtonMain";
import { CartLogo } from "./svg/CartLogo";
import { Title } from "./Title";
import box from "../img/box.png";
import { Link } from 'react-router-dom';


<Link to="/Path" > Contact us </Link> 

export function Best () {
  return(
    <section className="best section">
      <img src={ box } alt="Бокс “Трюфель”" width="516" height="561" />      
      <div className="best__container">
        <Title text={ "Бокс “Трюфель”" }/>
        <p>Акция <span className="best__sale"> -10%</span></p>
        <p>с 08.03.2021 по 10.03.2021</p>
        <div className="best__price-container">
          <p className="best__price best__price--old">1500 руб.</p>
          <p className="best__price best__price--new">1350 руб.</p>
        </div>
        <div className="best__button-container">
          <ButtonMain text="Подробнее" />
          <Link to='/cart'>
            <span className="visually-hidden">Купить</span>
            <CartLogo />
          </Link>
        </div>
      </div>
    </section>
  )
}