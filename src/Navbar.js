import React from 'react';
const { useState, useEffect } = React;


const Navbar = props => {
  return (
    <nav>
      <ul>
        <li onClick={event=>props.selectComponent(event)}><a href='#'>Food</a></li>
        <li onClick={event=>props.selectComponent(event)}><a href='#'>Restaurant</a></li>
        <li onClick={event=>props.selectComponent(event)}><a href='#'>Cuisine</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;