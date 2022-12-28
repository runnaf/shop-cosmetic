import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCard } from "./ItemCard";
import { ArrowButton } from "./svg/ArrowButton";


export function Card({className, arrayData, numberCards}) {
  const [card] = useState(arrayData);
  const [cardPage,setCardPage] = useState(1);
  const lastIndexCard = cardPage*numberCards;
  const firstIndexCard = lastIndexCard - numberCards;
  const cardsOnList = card.slice(firstIndexCard, lastIndexCard);
  const lists = [];
  
  for (let i = 1; i<= Math.ceil(arrayData.length/numberCards); i++) {
    lists.push(i)
  }

  function functionChange(item) {
    setCardPage(item);
  }

  function prevList() {
    if (cardPage!==1) {
      setCardPage(cardPage - 1)
    }
    else return
  }

  function nextList() {
    if (cardPage!==lists.length) {
      setCardPage(cardPage + 1)
    }
    else return
  }


  return (<>
    <ul className={className? className + ' card-list': 'card-list'}>{ cardsOnList.map((item, id) => {
      return <ItemCard key={id} item={item} />
      })}
    </ul>
    <div className="blog__navigation">
      <button type="button" className="blog__button-navigation" onClick={prevList}>
        <span className="visually-hidden">Назад</span>
        <ArrowButton />
      </button>
      <ul>
        {lists.map((item) => {
        return <li key={ item } className="page-item"><Link to="#!" className={cardPage === item ? 'current-page page' : 'page'} onClick={()=>functionChange(item)}>{ item }</Link></li>
        }) }     
      </ul>
      <button type="button" className="blog__button-navigation blog__button-navigation--next" onClick={nextList}>
        <span className="visually-hidden">Вперед</span>
        <ArrowButton />
      </button>
    </div>
  </>)

}