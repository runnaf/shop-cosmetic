import { SelectedOption } from "./Select";

export function FilterCatalog() {
  return(
    <form className="catalog__filter">
      <input className="visually-hidden" type="radio" id="all" />
      <label htmlFor="all">Все товары</label>
      <input  className="visually-hidden" type="radio" id="soup" />
      <label htmlFor="soup">Мыло</label>
      <input className="visually-hidden" type="radio" id="bath-bomb" />
      <label htmlFor="bath-bomb">Бомбы для ванны</label>
      <input className="visually-hidden" type="radio" id="scrub" />
      <label htmlFor="scrub">Скраб для тела</label>
      <SelectedOption />
    </form>
  )
}