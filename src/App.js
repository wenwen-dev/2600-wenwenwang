import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import FoodSection from './FoodSection';
import CuisineSection from './CuisineSection';
import RestaurantSection from './RestaurantSection';


const App = props => {
  const [currentSelection, setCurrentSelection] = useState('');

  let displayedComponent = <></>;

  const selectComponent = event => {
    event.preventDefault();
    setCurrentSelection(event.target.innerHTML);
  }

  if (currentSelection === 'Food') {
    displayedComponent = <FoodSection />
  }
  else if (currentSelection === 'Restaurant') {
    displayedComponent = <RestaurantSection />
  }
  else if (currentSelection === 'Cuisine') {
    displayedComponent = <CuisineSection />
  }
  else {
    displayedComponent = <><h2>hahaha</h2></>
  }
  // useEffect(function display() {
  //   if (currentSelection === 'Food') {
  //     console.log(`Food should be rendered`);
  //     displayedComponent = <FoodSection />
  //   }
  //   else {
  //     console.log(`Hahaha should be rendered`);

  //     displayedComponent = <><h2>hahaha</h2></>
  //   }
  //Qs: Why is UseEffect not needed here? What if after the user clicks on a section, e.f. 'Food', it's not updated in State yet, and therefore not rendered?

 


return (
  <>
    <h1>Best Food in Vancouver</h1>
    <Navbar selectComponent={selectComponent}/>
    {displayedComponent}
    

  </>
)

 
}



export default App;


// switch(selection) {
//   case 'Food':
//     setCurrentSelection('Food');
//     break;
//   case 'Restaurant':
//     setCurrentSelection('Restaurant');
//     break;
//   case 'Cuisine':
//     setCurrentSelection('Cuisine');
//     break;
// }