import React from 'react';
const { useState, useEffect } = React;
import RandomSelection from './RandomSelection';
import FoodForm from './FoodForm';


const Page = props => {

  let displayedForm = <></>;

  if (props.currentSelection === 'Food') {
    displayedForm = <FoodForm />
  }


  return (
    <>
      {/* {<pageTitle>} */}
      <RandomSelection currentSelection={props.currentSelection}/>
      {displayedForm}
      {/* <displayAll /> */}
      <p>{props.currentSelection}</p>
    </>
  )
}

export default Page;