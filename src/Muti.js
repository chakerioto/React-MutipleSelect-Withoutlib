import React, { useState } from 'react';

function Muti() {
  const items = [
    { id: 1, name: 'chicken', isSelected: false },
    { id: 2, name: 'dog', isSelected: false },
    { id: 3, name: 'cat', isSelected: false },
    { id: 4, name: 'duck', isSelected: false },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [itemSelect, setItemSelect] = useState([]);

  const addItem = el => {
    if (itemSelect.length === 0) {
      setItemSelect([{ ...el, isSelected: true }]);
    } else {
      itemSelect.map(item => {
        if (item.id === el.id) {
          console.log(itemSelect);
          setItemSelect(itemSelect.filter(i => i.id !== el.id));
        } else {
          setItemSelect(...itemSelect, { ...el, isSelected: true });
        }
      });
    }
  };

  const showAnswer = () => {
    const dropdown1 = document.getElementById('select-items');
    if (isOpen) {
      dropdown1.style.display = 'block';
      setIsOpen(!isOpen);
    } else {
      dropdown1.style.display = 'none';
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
