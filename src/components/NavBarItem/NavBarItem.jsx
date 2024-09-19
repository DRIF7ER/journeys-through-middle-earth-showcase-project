import './NavBarItem.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function NavBarItem (props) {
  const [open, setOpen] = useState(false);

  return(
    <li className='nav-bar-item' id='nav-bar-item-id'>
      <div className='icon-button' onClick={ () => setOpen(!open) }>
        <img className='link-img' src={props.icon} />
      </div>
      { open && props.children }
    </li>
  )
}

export default NavBarItem;