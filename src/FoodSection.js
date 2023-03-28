import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import FoodForm from './FoodForm';

const FoodSection = props => {
  const [allFoods, setAllFoods] = useState([]);

  axios.get('/api/v1/foods')
  .then(results=>setAllFoods(results.data))
  .catch(error=>console.log(error))

  return (
    <section id='food-section'>
      <h2>Food Section</h2>
      <FoodForm />
      <ul className='food-list'>
        {allFoods.map(food=><li key={food._id}>{food.name}</li>)}
      </ul>
    </section>
  )
}

export default FoodSection;