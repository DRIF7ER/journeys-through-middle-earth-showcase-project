import React from 'react';

export function PoiSingleDisplay(props) {

  const { place, deeds, poiImage } = props;

  return (
    <div className={ `single-poi-container ${ place }` }>
      <div className='quote-and-snippet'>
        <p>{ '*+=&^%' }</p>
        <p>{ deeds }</p>
      </div>
      <img src />
    </div>
  )
};

export default PoiSingleDisplay;