import { Card } from "./Card";
import { TitleMain } from "./TitleMain";
import { data } from "../data/dataAll";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price-asc', label: 'По возрастанию цены' },
  { value: 'price-desc', label: 'По убыванию цены' },
];

export function Shop() {
  const [dataArray, setDataArray] = useState(data);
  const [selectedOption, setSelectedOption] = useState('popular');
  const [value, setValue] = useState("all");
  

  const filterOption = (newValue) => {
    setSelectedOption(newValue.value);
    
    if (newValue.value === 'popular') {
      dataArray.sort((function(a, b) {
        if (a.popular < b.popular) {
          return 1;
        }
        if (a.popular > b.popular) { 
          return -1;
        }
        return 0;
      }));
      
      setDataArray(dataArray);
    }
    else if (newValue.value === 'price-asc') {
        dataArray.sort((function(a, b) {
          return a.price - b.price;
      }))

      setDataArray(dataArray);

    } else if (newValue.value === 'price-desc') {      
        dataArray.sort((function(a, b) {
          return b.price - a.price;
      }))

      setDataArray(dataArray);
    }
  } 

  const onChangeValueRadio = (e) => {
    setValue(e.target.value);

    if (e.target.value === 'all') {
      setDataArray(data)
    } else {
        setDataArray(data.filter(item => item.type === e.target.value))      
    }
  }
  
  return(
    <section className="catalog section">
      <TitleMain text="Каталог" />
      <form className="catalog__filter">
        <fieldset>
          <input className="visually-hidden" onChange={onChangeValueRadio} type="radio" name="radio" id="all" value="all" checked={value === "all" ? true : false}/>
          <label htmlFor="all">Все товары</label>
          <input className="visually-hidden"  onChange={onChangeValueRadio} type="radio" name="radio" id="soup" value="soap" checked={value === "soap" ? true : false}/>
          <label htmlFor="soup">Мыло</label>
          <input className="visually-hidden" onChange={onChangeValueRadio} type="radio" name="radio" id="bath-bomb" value="bath-bomb" checked={value === "bath-bomb" ? true : false}/>
          <label htmlFor="bath-bomb">Бомбы для ванны</label>
          <input className="visually-hidden" onChange={onChangeValueRadio} type="radio" name="radio" id="scrub" value="scrub" checked={value === "scrub" ? true : false}/>
          <label htmlFor="scrub">Скраб для тела</label>
        </fieldset>      
        <fieldset className="filter__select">
          <label>Сортировать по:</label>
          <Select
            classNamePrefix='custom-select'
            defaultValue={selectedOption}
            onChange={filterOption}
            options={options} 
            placeholder="Выбрать фильтр"
          />
        </fieldset>
      </form>
      <Card className={'catalog__cards'} arrayData={ dataArray } numberCards={12} />
    </section>
  )
}