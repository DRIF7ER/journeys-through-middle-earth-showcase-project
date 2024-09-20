import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Home } from './components/Home/Home.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { DropdownMenu, DropdownItem } from './components/DropdownMenu/DropdownMenu.jsx';
import { NavBarItem } from './components/NavBarItem/NavBarItem.jsx';
import { Paths } from './components/Paths/Paths.jsx';
import { MapWithControls } from './components/MapWithControls/MapWithControls.jsx';
// import { middleEarthMap } from './assets/Maps/middle_earth_map.png';
import { aragornData } from './assets/CharacterPaths/CharacterDataForAPI.jsx';
import IMAGES from './assets/Images.jsx';
import Path from './assets/Icons/Path.svg';
import Narsil from './assets/Icons/Narsil.svg';
import homeIcon from './assets/Icons/Better Hobbit Hole.svg';
import Aragorn from './assets/CharacterPaths/Aragorn/Aragorn Path.svg';
import AragornPath from './assets/CharacterPaths/Aragorn/AragornPathComp.jsx';

const characterData = {
  characterName: null,
  characterId: null,
  quotes: null,
  deeds: null
}

function App() {

  console.log(aragornData, '<-- ARAGORN DATA')

  return (
    <>
      <NavBar>
        <Link to='/' className='home-link'><NavBarItem icon={homeIcon} /></Link>
        <NavBarItem icon={ Path }>
          <DropdownMenu>
            <Link to='/paths/Aragorn'><DropdownItem leftIcon={ Narsil } characterId={ aragornData.characterId } name={ aragornData.name } /></Link>
          </DropdownMenu>
        </NavBarItem>
      </NavBar>
      <MapWithControls />
    </>
  )
}

export default App
