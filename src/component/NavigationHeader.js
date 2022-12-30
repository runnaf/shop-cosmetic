import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Blog } from "./Blog";
import { Home } from "./Home";
import { Shop } from "./Shop";
import logo from "../img/logo.svg";
import { FavoriteLogo } from "./svg/FavoriteLogo";
import { CartLogo } from "./svg/CartLogo";
import { SearchLogo } from "./svg/SearchLogo";
import { UserLogo } from "./svg/UserLogo";
import { AboutUs } from "./AboutUs";

export function Navigation () {
  return (
    <Router>
      <nav className="header section">
        <Link to="/"><img src={ logo } alt="Логотип" width="116" height="66" /></Link>
        <ul className="header__list info">
          <li className="info__item">
            <Link className="info__link" to="/aboutus">О нас</Link>
          </li>
          <li className="info__item">
            <Link to="/shop" className="info__link">Каталог</Link>
          </li>
          <li className="info__item">
            <Link to="/blog" className="info__link">Блог</Link>
          </li>
        </ul>
        <ul className="header__list user-info">
          <li className="user-info__item">
            <form className="user-info__form">
              <div className="user-info__container">
                <input className="user-info__field" type="text" />
                <button className="user-info__field-button">
                  <span className="visually-hidden">Поиск</span>
                  <SearchLogo />
                </button>
              </div>              
            </form>
          </li>
          <li className="user-info__item">
            <Link className="user-info__link" to="/favorite">
              <span className="visually-hidden">Избранное</span>
              <FavoriteLogo />
            </Link>
          </li>
          <li className="user-info__item">
            <Link className="user-info__link" to="/user">
              <span className="visually-hidden">Данные пользователя</span>
              <UserLogo />
            </Link>
          </li>
          <li className="user-info__item">
            <Link className="user-info__link" to="/cart">
              <span className="visually-hidden">Корзина</span>
              <CartLogo />
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/favorite" />
        <Route path="user" />
        <Route path="cart" />
      </Routes>
      <nav className="header section">
        <Link to="/"><img src={ logo } alt="Логотип" width="116" height="66" /></Link>
        <ul className="header__list info">
          <li className="info__item">
            <Link className="info__link" to="/aboutus">О нас</Link>
          </li>
          <li className="info__item">
            <Link to="/shop" className="info__link">Каталог</Link>
          </li>
          <li className="info__item">
            <Link to="/blog" className="info__link">Блог</Link>
          </li>
        </ul>        
      </nav>  
    </Router>
  )
}