import React from 'react';
import NavBar from './Navbar';
import FoodSection from './FoodSection';
import CuisineSection from './CuisineSection';
import RestaurantSection from './RestaurantSection';



const App = props => {
  return (
    <>
      <h1>Best Food in Vancouver</h1>
      <NavBar />
      <FoodSection />
      <RestaurantSection />
      <CuisineSection />
    </>
  )
}



export default App;