import { Card } from "./Card";
import { FilterCatalog } from "./FilterCatalog";
import { TitleMain } from "./TitleMain";
import { data } from "../data/dataAll";

export function Shop() {
  return(
    <section className="catalog section">
      <TitleMain text="Каталог" />
      <FilterCatalog />
      <Card className={'catalog__cards'} arrayData={ data } numberCards={12} />
    </section>
  )
}