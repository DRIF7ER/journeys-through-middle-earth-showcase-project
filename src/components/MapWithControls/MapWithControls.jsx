import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Paths } from '../Paths/Paths.jsx';
import AragornPath from '../../assets/CharacterPaths/Aragorn/AragornPathComp.jsx';
import aragornData from '../../assets/CharacterPaths/CharacterDataForAPI.jsx';
import IMAGES from '../../assets/Images';
import './MapWithControls.css';

export function MapWithControls() {
  console.log(aragornData.deeds, '<-- CHECK DEEDS HERE')
  return (
    <TransformWrapper wheel={{ disabled: true }} limitToBounds={true}>

      {({ zoomIn, zoomOut, resetTransform }) => {
        return (
          <React.Fragment>
            <TransformComponent>
              <Routes>
                <Route path='/paths/:id' element={<Paths id={ aragornData.characterId } character={ aragornData.name } characterDeeds={ aragornData.deeds } >{<AragornPath />}</Paths>} />
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
  )
};

export default MapWithControls;