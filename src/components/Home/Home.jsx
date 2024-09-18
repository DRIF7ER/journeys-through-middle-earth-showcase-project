import React from 'react';
import ReactComponent from 'react';
import './Home.css';
import { fetchCharacters } from '../ApiCalls/ApiCalls';
import { NavBar } from '../NavBar/NavBar.jsx';
import { NavBarItem } from '../NavBarItem/NavBarItem.jsx';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu.jsx'
import Narsil from '../../assets/Icons/Narsil.svg'
import Path from '../../assets/Icons/Path.svg'

export function Home() {
  // fetchCharacters()

  return(
    <div className="home-outer-container">
      <div id="map-layer">
      </div>
    </div>
  )
};

export default Home;