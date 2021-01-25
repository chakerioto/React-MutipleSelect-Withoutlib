import React, { useState } from 'react';

function Muti() {
  const items = [
    { id: 1, name: 'chicken' },
    { id: 2, name: 'dog' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'duck' },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [itemSelect, setItemSelect] = useState([]);

  const addItem = el => {
    // const test = itemSelect.some(item => item.id !== el.id);
    // console.log(test);
    // if (!test) {
    //   setItemSelect([...itemSelect, el]);
    // }
    //need fixing
  };

  const showAnswer = () => {
    const dropdown1 = document.getElementById('select-items');
    if (isOpen) {
      dropdown1.style.display = 'none';
      setIsOpen(!isOpen);
    } else {
      dropdown1.style.display = 'block';
      setIsOpen(!isOpen);
    }
  };

  console.log(itemSelect);

  return (
    <div className="container">
      <h1>Select a pet :</h1>
      <div className="select-bar" onClick={() => showAnswer()}>
        {itemSelect.map(item => {
          return (
            <div className="item-add" key={item.id}>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="select-items" id="select-items">
        {items.map(el => {
          return (
            <div
              className="item-choice"
              key={el.id}
              onClick={() => addItem(el)}
            >
              <h4>{el.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Muti;
