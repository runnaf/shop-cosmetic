import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import logo from "../img/logo.svg";

export function NavigationFooter () {
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
      </nav>      
    </Router>
  )
}