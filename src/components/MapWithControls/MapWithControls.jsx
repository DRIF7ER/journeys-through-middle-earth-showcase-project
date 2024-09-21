// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// // import { routes } from '../../App.jsx';
// import { Paths } from '../Paths/Paths.jsx';
// import AragornPath from '../../assets/CharacterPaths/Aragorn/AragornPathComp.jsx';
// import aragornData from '../../assets/CharacterPaths/CharacterData.jsx';
// import IMAGES from '../../assets/Images';
// import './MapWithControls.css';

export function MapWithControls({ data }) {
  // console.log(data.name, '<-- CHECK DEEDS HERE')

  // const charPaths = [
  //   {
  //     name: 'Aragorn',
  //     charPath: <AragornPath />
  //   },
  // ]

  // function chooseCharacterPath(aName) {
  //   charPaths.find((path) => {
  //     console.log(aName, '<-- CHECK PATH 1')
  //     path.name == aName;
  //     console.log(path.charPath, '<-- CHECK PATH 2')
  //     return path.charPath;
  //   });
  // };

  // return (
  //   <TransformWrapper wheel={{ disabled: true }} limitToBounds={true}>

  //     {({ zoomIn, zoomOut, resetTransform }) => {
  //       return (
  //         <React.Fragment>
  //           <TransformComponent>
  //               {/* use a useparams to take param form url (id) and place all routes in App.js */}
  //             <div className='svg-path-wrap'>
  //               { console.log(chooseCharacterPath(data.name), '<-- from comp') }
  //             </div>
  //             <div className='map-wrap'>
  //               <img src={IMAGES.middleEarthMap} className='middle-earth-map' />
  //             </div>
  //           </TransformComponent>
  //           <div className='map-controls'>
  //             <button className='zoom-in' onClick={() => zoomIn()}>+</button>
  //             <button className='reset-zoom' onClick={() => resetTransform()}>x</button>
  //             <button className='zoom-out' onClick={() => zoomOut()}>-</button>
  //           </div>
  //         </React.Fragment>
  //       )
  //     }}
  //   </TransformWrapper>
  // )
};

export default MapWithControls;