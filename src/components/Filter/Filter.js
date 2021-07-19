import React from 'react';
import './Filter.css';


const Filter = ({valueState, filterByName}) => {
  return (
    <label>
        Filter
      <input type="text" className="label" value={valueState} onChange={filterByName}/>
      
    </label>
  )
}

export default Filter;