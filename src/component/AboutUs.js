import { TitleMain } from "./TitleMain";
import shop from "../img/about/shop.jpg";
import natural from "../img/about/natural.jpg";
import { desc } from "../data/aboutUs"
import { useState } from "react";

export function AboutUs () {
  const [state, setState] = useState(false);

  const onChangeState = () => {
    setState(!state)
  }

  return(
    <section className="section about">
      <TitleMain text="кто мы?" />
      <div className="about__container">
        <div>
          <div className="about__wrapper">
            <p>{desc[0]}</p> 
          </div>          
          <img src={ shop } width='461' height="632" alt="наш магазин" />
        </div>    
        <div className="about__wrapper" >
          <img src={ natural } width='705' height="736" alt="наш магазин" />
          <h2>Наследие NATURAL STORIES</h2>
          <p>{state ? desc[1] : desc[1].substring(0, 170)}<button type="button" onClick={onChangeState}>{state ? 'свернуть' : 'развернуть'}</button></p>
        </div>
      </div>
    </section>
  )
}