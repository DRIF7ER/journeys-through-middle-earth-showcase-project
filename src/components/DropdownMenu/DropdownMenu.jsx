import './DropdownMenu.css'
import React from "react";

export function DropdownItem (props) {

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