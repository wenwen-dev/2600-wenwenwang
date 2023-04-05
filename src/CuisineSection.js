import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';

const CuisineSection = props => {

  const [cuisineName, setCuisineName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(function getAllCuisines() {
    axios.get('/api/v1/cuisines')
    .then(results => props.setAllCuisines(results.data))
    .catch(error=>console.log(error))
  }, [])

    // axios.get('/api/v1/cuisines')
    // .then(results => props.setAllCuisines(results.data))
    // .catch(error=>console.log(error))
    // Qs: only useEffect works, above would cause non-stop rendering. Why?

  const updateCuisineName = (event) => {
    setCuisineName(event.target.value);
    console.log(cuisineName);
  }

  const addCuisine = event => {
    event.preventDefault();
    axios.post('/api/v1/cuisines', {
      'name': cuisineName,
    })
    .then(result=>{
      console.log(`Result from api is: ${result}`);
      updateMessage(event, `Successfully added ${cuisineName} cuisines.`);
      return axios.get('/api/v1/cuisines')
    })
    .then(results => {
      props.setAllCuisines(results.data);
    })
    .catch(error=>{
      updateMessage(event, `Error: ${error.response.data}`)
    })
  }

  const updateMessage = (event, msg) => {
    event.preventDefault();
    setMessage(msg);
  }

  return (
    <>
      <h2>Cuisines</h2>
      <div id="cuisine-form">
        <h3>Add a new cuisine</h3>
        <form onSubmit={event=>addCuisine(event)}>
          <label>
            Cuisine name:
            <input onChange={event=> updateCuisineName(event)} value={cuisineName}/>
          </label>
          <button>Add</button>
        </form>
        <p>{message}</p>
      </div>
      <div>
          <h3>All Cuisines</h3>
          <ul id='all-cuisines'>
            {props.allCuisines.map(cuisine=><li key={cuisine.name}>{cuisine.name}</li>)}
          </ul>
        </div>
    </>
  )
}

export default CuisineSection;