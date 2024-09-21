import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './App.css';

import { Home } from './components/Home/Home.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { DropdownMenu, DropdownItem } from './components/DropdownMenu/DropdownMenu.jsx';
import { NavBarItem } from './components/NavBarItem/NavBarItem.jsx';
import { Paths } from './components/Paths/Paths.jsx';
import { aragornData } from './assets/CharacterPaths/CharacterData.jsx';
import IMAGES from './assets/Images.jsx';
import Path from './assets/Icons/Path.svg';
import Narsil from './assets/Icons/Narsil.svg';
import homeIcon from './assets/Icons/Better Hobbit Hole.svg';
import AragornPath from './assets/CharacterPaths/Aragorn/AragornPathComp.jsx';

function App() {
  
  return (
    <>
      <NavBar>
        <Link to='/' className='home-link'><NavBarItem icon={homeIcon} /></Link>
        <NavBarItem icon={Path}>
          <DropdownMenu>
            <Link to='/paths/Aragorn'><DropdownItem leftIcon={Narsil} characterId={aragornData.characterId} name={aragornData.name} /></Link>
          </DropdownMenu>
        </NavBarItem>
      </NavBar>

      <TransformWrapper wheel={{ disabled: true }} limitToBounds={true}>

        {({ zoomIn, zoomOut, resetTransform }) => {
          return (
            <React.Fragment>
              <TransformComponent>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/paths/:name' element={<Paths 
                    character={ aragornData.name } 
                    id={ aragornData.characterId } 
                    characterDeeds={ aragornData.deeds } 
                    quoteIds={ aragornData.deeds.quoteIds } > <AragornPath /> </Paths>} />
                </Routes>
                <div className='map-wrap'>
                  <img src={IMAGES.middleEarthMap} className='middle-earth-map' />
                </div>
              </TransformComponent>
              <div className='map-controls'>
                <button className='zoom-in' onClick={() => zoomIn()}>+</button>
                <button className='reset-zoom' onClick={() => resetTransform()}>x</button>
                <button className='zoom-out' onClick={() => zoomOut()}>-</button>
              </div>
            </React.Fragment>
          )
        }}
      </TransformWrapper>
    </>
  )
}

export default App
