import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import FoodSection from './FoodSection';
import CuisineSection from './CuisineSection';
import RestaurantSection from './RestaurantSection';


const App = props => {
  const [currentSelection, setCurrentSelection] = useState('Food');
  const [allCuisines, setAllCuisines] = useState([]);


  let displayedComponent = <></>;

  const selectComponent = event => {
    event.preventDefault();
    setCurrentSelection(event.target.innerHTML);
    console.log(event.target.innerHTML);
    console.log(currentSelection);
  }

  if (currentSelection === 'Restaurant') {
    displayedComponent = <RestaurantSection currentSelection={currentSelection} allCuisines={allCuisines} setAllCuisines={setAllCuisines}/>
  }
  else if (currentSelection === 'Cuisine') {
    displayedComponent = <CuisineSection currentSelection={currentSelection} allCuisines={allCuisines} setAllCuisines={setAllCuisines}/>
  }

  else {
      displayedComponent = <FoodSection currentSelection={currentSelection} allCuisines={allCuisines} setAllCuisines={setAllCuisines}/>
  }
 


return (
  <>
    <header>
      <h1>Yum</h1>
      <Navbar className='nav' selectComponent={selectComponent}/>
    </header>
    <main>
      {displayedComponent}
    </main>
    
    

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