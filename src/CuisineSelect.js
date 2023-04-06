import React from 'react';
const { useState, useEffect } = React;

const CuisineSelect = props => {

  return (
    <>
      <select name='cuisine' id='cuisine-select' onChange={props.updateChosenCuisine} 
          defaultValue='default'>
          <option disabled value='default'>-- choose a cuisine --</option>
          {props.allCuisines.map(cuisine=><option value={cuisine.name} key={cuisine.name}>{cuisine.name}</option>)}
      </select>
    </>
  )
}

export default CuisineSelect;