import { useState } from "react";
import { data } from "../data/dataBlog";

export function BlogItem() {
  const [blogCart] = useState(data);

  return(
    <ul className="blog__card">
      {blogCart.map(item => {
        const {id, image, desc, date} = item;

        return (
          <li key={ id }>
            <img src={image} width="338" height="500" alt="Иллюстрация к блоку" />
            <p>{ desc }</p>
            <p>{ date }</p>
          </li>
        )
      })}
    </ul>
  )
}