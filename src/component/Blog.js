import { Card } from "./Card";
import { TitleMain } from "./TitleMain";
import { data } from "../data/dataBlog";


export function Blog() {
  return(
    <section className="section blog">
      <TitleMain text="Блог" />
      <Card arrayData= {data} numberCards = {4} className="blog__card"/>
    </section>
  )
}