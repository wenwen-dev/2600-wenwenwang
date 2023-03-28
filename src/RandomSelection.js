import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';


const RandomSelection = props => {
  const [randomItems, setRandomItems] = useState([]);

  let target = '';
  console.log(props.currentSelection);
  if (props.currentSelection === 'Food') {
    console.log('food selected');
    target = 'foods';
  }
  else if (props.currentSelection === 'Cuisine') {
    console.log('cuisine selected');
    target = 'cuisines';
  }
  else {
  console.log('uh oh');
  }

  axios.get(`/api/v1/${target}`)
  .then(results=>setRandomItems(results.data))
  .catch(error=>console.log(error))

  
  return (
    <>
      <h3>Random selection</h3>
      <ul className='random-display'>
        {randomItems.map(item=><li key={item._id}>{item.cuisine}</li>)}
      </ul>
    </>
  )
}

export default RandomSelection;  
// useEffect(function displayRandom() {
//   let target = '';
//   console.log(props.currentSelection);
//   if (props.currentSelection === 'Food') {
//     console.log('food selected');
//     target = 'foods';
//   }
//   else if (props.currentSelection === 'Cuisine') {
//     console.log('cuisine selected');
//     target = 'cuisines';
//  }
//  else {
//   console.log('uh oh');
//  }

//   axios.get(`/api/v1/${target}`)
//   .then(results=>setRandomItems(results.data))
//   .catch(error=>console.log(error))

// }, props.currentSelection);