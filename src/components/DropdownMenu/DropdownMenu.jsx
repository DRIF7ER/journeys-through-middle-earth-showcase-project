import './DropdownMenu.css'
import React, { useState } from "react";
import NavGuideItem from "../NavBarItem/NavBarItem.jsx";
import Narsil from '../../assets/Icons/Narsil.svg';
import Path from '../../assets/Icons/Path.svg';

export function DropdownItem (props) {
  console.log(props.characterId, props.name, '<-- FROM DROPDOWN ITEM')

  return (
    <div className='menu-item'>
      <img className='dropdown-icon-img' src={ props.leftIcon } />
      <span className='icon-button-name' >{ props.name }</span>
    </div>
  );
};

export function DropdownMenu (props) {

  return(
    <div className='dropdown-menu'>
      { props.children }
    </div>
  );
};

export default {
  DropdownMenu,
  DropdownItem,
};