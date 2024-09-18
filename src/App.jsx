import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Home } from './components/Home/Home.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { DropdownMenu, DropdownItem } from './components/DropdownMenu/DropdownMenu.jsx';
import { NavBarItem } from './components/NavBarItem/NavBarItem.jsx';
import { Paths } from './components/Paths/Paths.jsx';
import Path from './assets/Icons/Path.svg';
import Narsil from './assets/Icons/Narsil.svg';
import homeIcon from './assets/Icons/Better Hobbit Hole.svg';
import Aragorn from './assets/CharacterPaths/Aragorn Path.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar>
        <Link to='/' className='home-link'><NavBarItem icon={homeIcon} /></Link>
        <NavBarItem icon={ Path }>
          <DropdownMenu>
            <Link to='/paths/Aragorn'><DropdownItem leftIcon={ Narsil } id={ 'Aragorn' }/></Link>
            {/* <DropdownItem leftIcon={ Narsil } id={ 'Aragorn' }/> */}
          </DropdownMenu>
        </NavBarItem>
      </NavBar>
      <Home />
      <Routes>
        {/* <Route path='/' element={ <Home /> } /> */}
        <Route path='/paths/:id' element={ <Paths id={ Aragorn } character='Aragorn'>{ Aragorn }</Paths> } />
      </Routes>
    </>
  )
}

export default App
