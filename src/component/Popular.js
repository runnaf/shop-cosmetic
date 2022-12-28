import { useState } from "react"
import { data } from "../data/dataAll"
import { Title } from "./Title";
import { ItemCard } from "./ItemCard";

export function Popular () {
  let newArray = [];
  const [popularItem, setPopularItem] = useState([0, 1]);
  const dataArray = data.filter(item=>item.popular);
  newArray.push(dataArray[popularItem[0]], dataArray[popularItem[1]])
  
  const showNextPicture = () => {
    setPopularItem([popularItem[0]+1, popularItem[1]+1]);
  
    if (popularItem[1] === dataArray.length-1) {
      setPopularItem([popularItem[0]+1, 0]);
    } else if (popularItem[0] === dataArray.length-1) {
      setPopularItem([0, popularItem[1]+1]);}
  }

  const shoePrevPicture = () => {
    setPopularItem([popularItem[0]-1, popularItem[1]-1]);
  
    if (popularItem[0] === 0) {
      setPopularItem([dataArray.length-1, popularItem[1]-1]);
    } else if (popularItem[1] === 0) {
      setPopularItem([popularItem[0]-1, dataArray.length-1]);}
  }

  return <section className="popular section">
    <Title text={'Популярные товары'} />
    <div className="slider">
      <button className="slider__button slider__button--prev" onClick={ shoePrevPicture } type="button">
        <span className="visually-hidden">Предыдущий слайдер</span>
      </button>
      <ul>{ newArray.map((item, id) => {
        return <ItemCard key={id} item={item} />
        })}
      </ul>
      <button className="slider__button slider__button--next" onClick={ showNextPicture } type="button">
        <span className="visually-hidden">Следующий слайдер</span>
      </button>
    </div>    
  </section>
} 