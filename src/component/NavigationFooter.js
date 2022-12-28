import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import logo from "../img/logo.svg";

export function NavigationFooter () {
  return (
    <Router>
      <nav className="footer section">
        <Link to="/"><img src={ logo } alt="Логотип" width="189" height="98"/></Link>
        <ul className="footer__list info">
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