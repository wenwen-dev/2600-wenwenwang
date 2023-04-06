import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import FoodSection from './FoodSection';
import CuisineSection from './CuisineSection';
import Wishlist from './Wishlist';


const App = props => {
  const [currentSelection, setCurrentSelection] = useState('Cuisine');
  const [allCuisines, setAllCuisines] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  let displayedComponent = <></>;

  const selectComponent = event => {
    event.preventDefault();
    setCurrentSelection(event.target.innerHTML);
  }

  if (currentSelection === 'Food') {
    displayedComponent = <FoodSection currentSelection={currentSelection} allCuisines={allCuisines} setAllCuisines={setAllCuisines} wishlist={wishlist} setWishlist={setWishlist}/>
  }

  else if (currentSelection === 'Wishlist') {
    displayedComponent = <Wishlist currentSelection={currentSelection} allCuisines={allCuisines} setAllCuisines={setAllCuisines} wishlist={wishlist} setWishlist={setWishlist}/>
  }

  else {
      displayedComponent = <CuisineSection currentSelection={currentSelection} allCuisines={allCuisines} setAllCuisines={setAllCuisines} wishlist={wishlist} setWishlist={setWishlist}/>
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