import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';

const CuisineSection = props => {

  const [cuisineName, setCuisineName] = useState('');
  const [allCuisines, setAllCuisines] = useState([]);
  // const [message, setMessage] = useState('');

  useEffect(function getAllCuisines() {
    axios.get('/api/v1/cuisines')
    .then(results => setAllCuisines(results.data))
    .catch(error=>console.log(error))
  }, [])

  

  const updateCuisineName = (event) => {
    setCuisineName(event.target.value);
    console.log(cuisineName);
  }

  const addCuisine = event => {
    event.preventDefault();
    axios.post('/api/v1/cuisines', {
      'name': cuisineName,
      'foods': []
    })
    .then(result=>{
      console.log(result.data);
      // setMessage('successfully added')
      // message = 'added!'//why not work?
      return axios.get('/api/v1/cuisines')
    })
    .then(results => {
      setAllCuisines(results.data);
    })
    .catch(error=>console.log(error))
  }

  return (
    <>
      <h2>Cuisines</h2>
      <div id="new-cuisine">
        <h3>Add a new cuisine</h3>
        <form onSubmit={event=>addCuisine(event)}>
          <label>
            Cuisine name:
            <input onChange={event=> updateCuisineName(event)} value={cuisineName}/>
          </label>
          <button>Add</button>
        </form>
        {/* <p>{message}</p> */}
      </div>
      <div>
          <h3>All Cuisines</h3>
          <ul id='all-cuisines'>
            {allCuisines.map(cuisine=><li>{cuisine.name}</li>)}
          </ul>
        </div>

    </>
  )
}

export default CuisineSection;