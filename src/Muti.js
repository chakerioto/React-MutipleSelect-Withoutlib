import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Muti({ many, setMany, options }) {
  const handleMultipleChange = e => {
    if (!many.includes(e.target.value)) {
      return setMany([...many, e.target.value]);
    }
    setMany(
      many.filter(el => {
        return el !== e.target.value;
      })
    );
  };
  return (
    <div className="left-right">
      <div className="left">
        <select value={many} multiple="true" onChange={handleMultipleChange}>
          {options.map(el => (
            <option value={el.value}>{el.name}</option>
          ))}
        </select>
      </div>
      <div className="right">
        <div className="txt">
          {many.map(el => {
            return (
              <div className="white">
                <h1>{el}</h1>
                <button>
                  <FontAwesomeIcon icon="trash" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Muti;
