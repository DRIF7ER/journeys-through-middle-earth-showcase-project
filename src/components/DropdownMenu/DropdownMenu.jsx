import React, { useState } from "react";
import NavGuideItem from "../NavBarItem/NavBarItem";
import Narsil from '../../assets/Icons/Narsil.svg';
import Path from '../../assets/Icons/Path.svg';

export function DropdownItem (props) {
  return (
    <div className='menu-item'>
      <img className='dropdown-icon-img' src={ props.leftIcon } />
      <span className='icon-button-name'>{ props.id }</span>
    </div>
  );
};

export function DropdownMenu (props) {
  // const [open, setOpen] = useState(false)

  return(
    <div className='dropdown-menu' >
      { props.children }
    </div>
  );
};

export default DropdownMenu;