import React, { useState } from 'react';
import { AiFillCloseCircle, AiOutlineCaretDown } from 'react-icons/ai';

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
    const found = itemSelect.find(element => element.id === el.id);
    if (found === undefined) {
      setItemSelect([...itemSelect, { ...el, isSelected: true }]);
    } else {
      const filter = itemSelect.filter(ele => ele.id !== el.id);
      setItemSelect(filter);
    }
  };
  const removeItem = item => {
    const removed = itemSelect.filter(ele => ele.id !== item.id);

    setItemSelect(removed);
  };

  const showAnswer = () => {
    const dropdown1 = document.getElementById('select-items');
    if (isOpen) {
      dropdown1.style.display = 'block';
      setIsOpen(!isOpen);
    } else {
      if (itemSelect.length === 0) {
        console.log(itemSelect);
        dropdown1.style.display = 'none';
        setIsOpen(!isOpen);
      }
    }
  };

  return (
    <div className="container">
      <h1>Select a pet :</h1>
      <div className="select-bar" onClick={() => showAnswer()}>
        <AiOutlineCaretDown size="2em" className="react-icon" />
        {itemSelect.map(item => {
          return (
            <div className="item-add" key={item.id}>
              <p>{item.name}</p>
              <button onClick={() => removeItem(item)}>
                <AiFillCloseCircle />
              </button>
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
