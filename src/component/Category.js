import { useState } from "react";
import { data } from "../data/data";
import { Title } from "./Title";
import { Link } from 'react-router-dom';

export function Category () {
  const [card] = useState(data);

  return(
    <section className="category section">
      <Title text={"Категории"}/>
      <ul>
        {card.map((item => {
          const {id, name, image} = item
          return <li key={id}>
                  <Link to="/">
                    <img src={image} alt={name} width="360" height="590" />
                    <div>
                    {name}
                    </div>
                  </Link>
                </li>
          }))}
      </ul>
    </section>
  )
}