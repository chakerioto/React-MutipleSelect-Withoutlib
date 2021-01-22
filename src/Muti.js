import React from 'react';

function Muti() {
  const items = [
    { id: 1, name: 'chicken' },
    { id: 2, name: 'dog' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'duck' },
  ];
  return (
    <div className="container">
      <h1>Select a pet :</h1>
      <div className="select-bar"></div>
      <div className="select-items">
        {items.map(el => {
          return (
            <div className="item-choice" key={el.id}>
              <h4>{el.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Muti;
