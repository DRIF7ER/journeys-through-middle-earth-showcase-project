import React, { useState } from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './NavBar.css'

export function NavBar(props) {

  return(
    <nav className='nav-bar'>
      <ul className='nav-bar-list' id='nav-bar-list-id'>
        { props.children }
      </ul>
    </nav>
  );
};

export default NavBar;