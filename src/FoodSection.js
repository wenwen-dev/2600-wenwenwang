import React from 'react';
const { useState, useEffect } = React;
import Page from './Page';

const FoodSection = props => {
  return (
    <section id='food-section'>
      <h2>Food Section</h2>
      <Page currentSelection={props.currentSelection}/>
    </section>
  )
}

export default FoodSection;