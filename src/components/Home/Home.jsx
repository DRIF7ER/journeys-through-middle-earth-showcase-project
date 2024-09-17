import React from 'react';
import ReactComponent from 'react';
import './Home.css';
import { fetchCharacters } from '../ApiCalls/ApiCalls';
import { NavGuide } from '../NavGuide/NavGuide.jsx';
import { NavGuideItem } from '../NavGuideItem/NavGuideItem.jsx';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu.jsx'
import Narsil from '../../assets/Icons/Narsil.svg'

export function Home() {
  // fetchCharacters()

  return(
    <div className="home-outer-container">
      <div id="map-layer">
        {/* <NavGuide props={ <NavGuideItem icon='../../assets/Icons/Narsil.svg' /> } /> */}
        <NavGuide>
          <DropdownMenu />
          {/* <NavGuideItem icon={ Narsil } /> */}
          {/* <li>X</li> */}
        </NavGuide>
        This will be something from the Home component...
      </div>
    </div>
  )
};

export default Home;