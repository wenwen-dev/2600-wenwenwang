import React from 'react';
const { useState, useEffect } = React;


const Navbar = props => {
  return (
    <nav>
      <ul>
        <li><a href='#' >Food</a></li>
        <li><a href='#'>Restaurant</a></li>
        <li><a href='#'>Cuisine</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;