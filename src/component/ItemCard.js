import { Link } from "react-router-dom";

export function ItemCard({item}) {
  const {name, image, price, desc, date} = item;
  return (
    <li>
      <Link to="/">
        {image ? <img src={ image } alt= { name } width="298" height="413" /> : <></>}
        {name ? <p>{ name }</p> : <></>}
        {price ? <p>{ price } руб.</p> : <></>}
        {desc ? <p>{ desc }</p> : <></>}
        {date ? <p>{ date }</p> : <></>}
      </Link>
    </li>
  )
}