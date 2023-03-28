import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';


const CuisineForm = props => {
  const [cuisineName, setCuisineName] = useState('');

  const updateCuisineName = event => {
    setCuisineName(event.target.value);
  }

  const submitCuisine = event => {
    event.preventDefault();
    axios.post('/api/v1/cuisines', {
      'name': cuisineName,
      'foods': []
    })
    .then(result => console.log(result))
    .catch(error=>console.log(error))
  }

  return (
    <>
      <h3>Cuisine Form</h3>
      <form onSubmit={event=>submitCuisine(event)}>
        <label>
          Add a cuisine:
          <input type="text" onChange={updateCuisineName} />
        </label>
        <button>submit cuisine</button>
      </form>
    </>
  )
}

export default CuisineForm;

