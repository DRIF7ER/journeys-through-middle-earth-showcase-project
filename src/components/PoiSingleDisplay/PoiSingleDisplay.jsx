import React from 'react';
import './PoiSingleDisplay.css'

export function PoiSingleDisplay(props) {

  const { place, deeds, poiImage } = props;

  console.log(deeds[0][0], '<-- FROM SINGLE POI')

  return (
    <div className={ `single-poi-container ${ place } poi-hidden` }>
      <div className='single-poi-inner-wrap'>
        <div className='description-and-img-wrap'>
          <div className='quote-and-snippet'>
            <p>{ 'This will be where the quotes from the API will go.' }</p>
            <div className='deed-display'>
              <p>{ deeds[0] }</p>
              <p>{ deeds[1] }</p>
              <p>{ deeds[2] }</p>
            </div>
          </div>
          <div className='poi-img-wrap'>
            <img src={ poiImage } />
          </div>
        </div>
        {/* <div className='single-display-controls'>
          <button></button>
          <button className='poi-close-btn' onClick={ () => {
              console.log('click worked.')
              let poiBox = document.querySelector(`.${ place }`);
              (!poiBox.classList.contains('poi-hidden') ? poiBox.classList.add('poi-hidden') : null)
            } 
          }>CLOSE</button>
          <button></button>
        </div> */}
      </div>
    </div>
  )
};

export default PoiSingleDisplay;