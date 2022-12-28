import { useState } from "react";
// import { optionCSS } from "react-select/dist/declarations/src/components/Option";
import Select from "react-select";

const options = [
  { value: 'popular', label: 'По пополярности' },
  { value: 'price-asc', label: 'По возрастанию цены' },
  { value: 'price-desc', label: 'По убыванию цены' },
];

export function SelectedOption() {
  const [selectedOption, setSelectedOption] = useState('popular');

  const getValue = () => {
    return selectedOption? options.filter(option => option.value === selectedOption.value) : '';
  }

  return (
    <div className="filter__select">
      <label>Сортировать по:</label>
      <Select
        classNamePrefix='custom-select'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        value={getValue()}
        placeholder="Выбрать фильтр"
      />
    </div>
  );
}