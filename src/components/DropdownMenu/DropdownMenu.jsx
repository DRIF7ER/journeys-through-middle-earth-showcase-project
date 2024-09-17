import React, { useState } from "react";
import NavGuideItem from "../NavBarItem/NavBarItem";
import Narsil from '../../assets/Icons/Narsil.svg';
import Path from '../../assets/Icons/Path.svg';


export function DropdownMenu () {
  // const [open, setOpen] = useState(false)

  function DropdownItem (props) {
    return (
      <a href='#' className='menu-item'>
        <img className='dropdown-icon-img' src={ props.leftIcon } />
        <span className='icon-button-name'>{ props.children }</span>
      </a>
    );
  };

  return(
    <div className='dropdown-menu' >
      <DropdownItem leftIcon={ Narsil }>Aragorn</DropdownItem>
    </div>
  );
};

export default DropdownMenu;