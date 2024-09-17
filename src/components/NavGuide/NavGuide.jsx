import React, { useState } from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './NavGuide.css'

export function NavGuide(props) {

  const [open, setOpen] = useState(false);

  return(
    <nav className='nav-guide'onClick={ () => setOpen(!open)} >
      Guide
      {/* <ul className='nav-guide-list' id='nav-guide-list-id'>
        { props.children }
      </ul> */}
      {/* <ul className='nav-guide-list'>
        <DropdownMenu />
      </ul> */}
      { open && <DropdownMenu /> }
    </nav>
  );
};

export default NavGuide;