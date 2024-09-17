import React, { useState } from 'react'

export function NavBarItem (props) {
  const [open, setOpen] = useState(false);

  return(
    <li className='nav-bar-item' id='nav-bar-item-id'>
      <a href='#' className='icon-button' onClick={ () => setOpen(!open) }>
        <img className='link-img' src={props.icon} />
      </a>
      { open && props.children }
    </li>
  )
}

export default NavBarItem;