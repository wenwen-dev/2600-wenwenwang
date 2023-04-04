import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import FoodSection from './FoodSection';
import CuisineSection from './CuisineSection';
import RestaurantSection from './RestaurantSection';
// import bg from './bg2.jpg';


const App = props => {
  const [currentSelection, setCurrentSelection] = useState('');

  let displayedComponent = <></>;

  const selectComponent = event => {
    event.preventDefault();
    setCurrentSelection(event.target.innerHTML);
    console.log(event.target.innerHTML);
    console.log(currentSelection);
    setInterval(()=>console.log(`3 seconds: ${currentSelection}`), 3000);
  }

  if (currentSelection === 'Restaurant') {
    displayedComponent = <RestaurantSection currentSelection={currentSelection}/>
  }
  else if (currentSelection === 'Cuisine') {
    displayedComponent = <CuisineSection currentSelection={currentSelection}/>
  }

  else {
      displayedComponent = <FoodSection currentSelection={currentSelection}/>
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