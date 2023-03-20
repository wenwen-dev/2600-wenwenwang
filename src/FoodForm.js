import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';


const FoodForm = props => {
  const [chosenCuisine, setChosenCuisine] = useState('');
  const [newFoodName, setNewFoodName] = useState('');

  const updateChosenCuisine = event => {
    setChosenCuisine(event.target.value);
    console.log(event.target.value);
  }
  const updateFoodName = event => {
    setNewFoodName(event.target.value);
    console.log(event.target.value);

  }
  const submitFood = event => {
    event.preventDefault();
    console.log('submitting');
    axios.post('/api/v1/foods', {
      'cuisine': chosenCuisine,
      'name': newFoodName
    })
    .then(result => console.log(result))
    .catch(error=>console.log(error))
  }

  return (
    <>
      <h3>Food Form</h3>
      <form onSubmit={event=>submitFood(event)}>
      <label htmlFor='cuisine-select'>Choose a cuisine: </label>
      <select id='cuisine-select' onChange={updateChosenCuisine}>
        {/* Qs: above should not be updateChosenCuisine(event) somehow, otherwise an error saying too many rendering. So i suppose i don't event need to pass in 'event'? */}
        <option value=''>Please select a cuisine</option>
        <option value='Japanese'>Japanese</option>
        <option value='Canadian'>Canadian</option>
        <option value='other'>Other</option>
      </select>
        <label>Food name:  
          <input type="text" onChange={event=>updateFoodName(event)} />
        </label>
        <button>submit food</button>
      </form>
    </>
  )
}

export default FoodForm;

