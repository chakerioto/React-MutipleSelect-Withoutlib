import React from 'react';

function Drag() {
  return (
    <div className="dnd">
      <div className="dnd__left">
        <div draggable className="dnd__items">
          1
        </div>
        <div className="dnd__items">2</div>
        <div className="dnd__items">6</div>
      </div>
      <div className="dnd__right">
        <div className="dnd__items">3</div>
        <div className="dnd__items">4</div>
        <div className="dnd__items">5</div>
      </div>
    </div>
  );
}

export default Drag;
