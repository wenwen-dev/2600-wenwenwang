import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';

const FoodSection = props => {
  const [chosenCuisine, setChosenCuisine] = useState('');
  const [chosenCuisine2, setChosenCuisine2] = useState('');
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');


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
      updateMessage(event, `Successfully added ${foodName}`)
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
    .then(result => console.log(result.data))
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
          <select name='cuisine' id='cuisine-select' onChange={updateChosenCuisine} 
          defaultValue='default'>
            {/* Qs: pass event as a parameter above, then too many re-rerenderings why? */}
            <option disabled value='default'>-- choose a cuisine --</option>
            {props.allCuisines.map(cuisine=><option value={cuisine.name} key={cuisine.name}>{cuisine.name}</option>)}
          </select>
          <label>Food name:  
            <input type="text" onChange={event=>updateFoodName(event)} value={foodName}/>
          </label>
          <label>
            Description: 
            <textarea onChange={updateDescription}></textarea></label>
          <button>submit food</button>
          <p>{message}</p>
        </form>
      </div>
      <div>
        {/* the following does not work FIXME: */}
        {/* <h3>All Foods</h3>
          <form onSubmit={getFoodsOfCuisine}>
            <label htmlFor='cuisine-select'>Choose a cuisine: 
            </label>
            <select name='cuisine2' onChange={updateChosenCuisine2} defaultValue='default'>
              <option disabled value='default'>-- choose a cuisine --</option>
              {props.allCuisines.map(cuisine=><option value={cuisine.name}>{cuisine.name}</option>)}
            </select>
            <button>Find</button>
          </form> */}

          
            {/* <ul id='all-foods'>

            </ul> */}
      </div>
    </>
  )
}

export default FoodSection;