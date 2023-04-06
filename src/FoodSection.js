import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import CuisineSelect from './CuisineSelect';

const FoodSection = props => {
  const [chosenCuisine, setChosenCuisine] = useState('');
  const [chosenCuisine2, setChosenCuisine2] = useState('');
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [foodsOfCuisine, setFoodsOfCuisine] = useState([]);


  const updateChosenCuisine = event => {
    setChosenCuisine(event.target.value);
    console.log(event.target.value);
    console.log(chosenCuisine);
  }

  const updateChosenCuisine2 = event => {
    setChosenCuisine2(event.target.value);
    console.log(event.target.value);
    console.log(chosenCuisine2);
  }

  const updateFoodName = event => {
    setFoodName(event.target.value);
    console.log(event.target.value);
  }

  const updateDescription = event => {
    setDescription(event.target.value);
  }

  const addFood = event => {
    event.preventDefault();
    axios.post('/api/v1/foods', {
      'cuisine': chosenCuisine,
      'name': foodName,
      'description': description
    })
    .then(result => {
      updateMessage(event, `Successfully added ${foodName} to ${chosenCuisine} cuisine.`)
    })
    .catch(error=> {
      console.log(error);
      updateMessage(event, `Error: ${error.response.data}`)
    })
  }

  const updateMessage = (event, msg) => {
    event.preventDefault();
    setMessage(msg);
  }

  const getFoodsOfCuisine = event => {
    event.preventDefault();
    axios.get(`/api/v1/cuisines/${chosenCuisine2}`)
    .then(result => {
      setFoodsOfCuisine(result.data.foods)
    })
    .catch(error=>console.log(error))
  }
  

  return (
    <>
      <h2>Food</h2>
      <div id='food-form'>
        <h3>Add a food</h3>
        <form onSubmit={event=>addFood(event)}>
          <label htmlFor='cuisine-select'>Choose a cuisine: 
          </label>
          <CuisineSelect updateChosenCuisine={updateChosenCuisine} allCuisines={props.allCuisines}/>
          <label>Food name:  
            <input type="text" onChange={event=>updateFoodName(event)} value={foodName}/>
          </label>
          <label>
            Description: 
            <textarea onChange={updateDescription}></textarea></label>
          <button>submit food</button>
          <p className='msg'>{message}</p>
        </form>
      </div>
      <div id='dinner-form'>
        <h3>Ideas for dinner</h3>
        <form onSubmit={getFoodsOfCuisine} >
          <label htmlFor='cuisine-select'>Choose a cuisine: 
          </label>
          <CuisineSelect updateChosenCuisine={updateChosenCuisine2} allCuisines={props.allCuisines}/>

          <button>see recommendations</button>
        </form>
      </div>
      <ul id='foods-of-cuisine'>
            {foodsOfCuisine.map(food=><li key={food.name}><strong>{food.name}</strong><p>{food.description}</p></li>)}

      </ul>
    </>
  )
}

export default FoodSection;