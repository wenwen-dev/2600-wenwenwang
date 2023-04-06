import React from 'react';
const { useState, useEffect } = React;

const CuisineSelect = props => {

  return (
    <>
      <select name='cuisine' id='cuisine-select' onChange={props.updateChosenCuisine} 
          defaultValue='default'>
            {/* Qs: pass event as a parameter above, then too many re-rerenderings why? */}
            <option disabled value='default'>-- choose a cuisine --</option>
            {props.allCuisines.map(cuisine=><option value={cuisine.name} key={cuisine.name}>{cuisine.name}</option>)}
      </select>
    </>
  )
  
}

export default CuisineSelect;