import React, { useState } from 'react'

export function NavGuideItem (props) {
  const [open, setOpen] = useState(false);

  return(
    <li className='nav-list-item' id='nav-list-item-id'>
      <a href='#' className='icon-button' onClick={ () => setOpen(!open) }>
        <img className='link-img' src={props.icon} />
        {/* { props.icon } */}
      </a>
      { open && props.children }
    </li>
  )
}

export default NavGuideItem;