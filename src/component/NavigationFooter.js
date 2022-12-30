import { Link,
} from "react-router-dom";
import logo from "../img/logo.svg";

export function NavigationFooter () {
  return (
      <nav className="header section">
        <a href="/"><img src={ logo } alt="Логотип" width="116" height="66" /></a>
        <ul className="header__list info">
          <li className="info__item">
            <Link className="info__link" to="/aboutus">О нас</Link>
          </li>
          <li className="info__item">
            <a href="/shop" className="info__link">Каталог</a>
          </li>
          <li className="info__item">
            <a href="/blog" className="info__link">Блог</a>
          </li>
        </ul>        
      </nav>  
  )
}