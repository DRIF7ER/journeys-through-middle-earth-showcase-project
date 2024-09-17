import React, { useState } from "react";
import NavGuideItem from "../NavGuideItem/NavGuideItem";
import Narsil from '../../assets/Icons/Narsil.svg';


export function DropdownMenu () {
  // const [open, setOpen] = useState(false)

  return(
    <div className='dropdown-menu' >
      <NavGuideItem icon={ Narsil } />
      {/* { props } */}
      {/* { open &&  } */}
    </div>
  );
};

export default DropdownMenu;