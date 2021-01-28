import React, { useState } from 'react';

function Drag() {
  const data = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
  ];
  const data2 = [
    { id: 4, name: 4 },
    { id: 5, name: 5 },
    { id: 6, name: 6 },
  ];
  const [item, setItem] = useState(data);
  const [item2, setItem2] = useState(data2);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  const handleDrop = e => {
    e.preventDefault();
    var datax = e.dataTransfer.getData('text');
    const result = item.filter(ele => ele.id !== parseInt(datax));
    const result1 = item.filter(ele => ele.id === parseInt(datax));
    const result2 = item2.concat(result1);
    setItem(result);
    setItem2(result2);
  };
  const handleDrop1 = e => {
    e.preventDefault();
    var datax = e.dataTransfer.getData('text');
    const result = item2.filter(ele => ele.id !== parseInt(datax));
    setItem2(result);

    const result1 = item2.filter(ele => ele.id === parseInt(datax));
    const result2 = item.concat(result1);
    setItem(result2);
  };
  const handleDragStart = (e, el) => {
    e.dataTransfer.setData('text', e.target.id);
  };
  return (
    <div className="dnd">
      <div
        className="dnd__left"
        onDrop={e => handleDrop1(e)}
        onDragOver={e => allowDrop(e)}
      >
        {item.map(el => {
          return (
            <div
              id={el.id}
              key={el.id}
              className="dnd__items"
              draggable
              onDragStart={e => handleDragStart(e, el)}
            >
              <p>{el.name}</p>
            </div>
          );
        })}
      </div>
      <div
        className="dnd__right"
        onDrop={e => handleDrop(e)}
        onDragOver={e => allowDrop(e)}
      >
        {item2.map(el => {
          return (
            <div
              id={el.id}
              key={el.id}
              className="dnd__items"
              draggable
              onDragStart={e => handleDragStart(e)}
            >
              <p>{el.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Drag;
