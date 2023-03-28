import React from 'react';
import CuisineForm from './CuisineForm';
const { useState, useEffect } = React;



const CuisineSection = props => {
  return (
    <>
      <h2>Cuisine Section</h2>
      <CuisineForm />


    </>
  )
}

export default CuisineSection;