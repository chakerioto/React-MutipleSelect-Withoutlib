import React, { useState } from 'react';
import Muti from './Muti';

function Example() {
  const [value, setValue] = useState('');
  const [mutipleValue, setMutipleValue] = useState([]);
  const [many, setMany] = useState([]);

  const options = [
    { id: 1, name: 'dog', value: 'dog' },
    { id: 2, name: 'cat', value: 'cat' },
    { id: 3, name: 'chicken', value: 'chicken' },
    { id: 4, name: 'wolf', value: 'wolf' },
  ];

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleMultipleChange = e => {
    if (!mutipleValue.includes(e.target.value)) {
      return setMutipleValue([...mutipleValue, e.target.value]);
    }
    setMutipleValue(
      mutipleValue.filter(el => {
        return el !== e.target.value;
      })
    );
  };
  return (
    <div>
      <div className="select-div">
        <select value={value} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <h1>Value you select is : {value}</h1>
        <select
          multiple={true}
          value={mutipleValue}
          onChange={handleMultipleChange}
          className="muti-select"
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <h1> Mutiple values you select is : {mutipleValue}</h1>
      </div>
      <Muti many={many} setMany={setMany} options={options} />
    </div>
  );
}

export default Example;
