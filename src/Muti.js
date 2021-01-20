import React, { useEffect } from 'react';

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

  const clickChange = i => {
    console.log(many);
    console.log(i);

    setMany(many.filter(item => item !== i));
  };

  useEffect(() => {
    setMany([...many]);
  }, []);
  return (
    <div className="left-right">
      <div className="left">
        <select value={many} multiple={true} onChange={handleMultipleChange}>
          {options.map(el => (
            <option key={el.id} value={el.value}>
              {el.name}
              {el.id}
            </option>
          ))}
        </select>
      </div>
      <div className="right">
        <div className="txt">
          {many.map(i => {
            return (
              <div className="white" key={i.id}>
                <h1>{i.id}</h1>
                <h1>{i}</h1>
                <button name={i.name} onClick={() => clickChange(i)}>
                  Delete
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
