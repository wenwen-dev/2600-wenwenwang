import React from 'react';
const { useState, useEffect } = React;


const Wishlist = props => {
  return (
    <>
      <h2>Wishlist</h2>
      <ul>
        {props.wishlist.map(item=><li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default Wishlist;