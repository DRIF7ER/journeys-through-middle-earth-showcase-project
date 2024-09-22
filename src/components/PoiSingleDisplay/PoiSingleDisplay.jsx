import React from 'react';
import './PoiSingleDisplay.css'

export function PoiSingleDisplay(props) {

  const { place, deeds, poiImage, poiQuotes } = props;

  return (
    <div className={ `single-poi-container ${ place }-single-poi-container poi-hidden` }>
      <div className='single-poi-inner-wrap'>
        <div className='description-and-img-wrap'>
          <div className='quote-and-snippet'>
            <p className='character-quote'>{ `" ${ poiQuotes } "` }</p>
            <div className='deed-display'>
              <p className='p-1'>{ deeds[0] }</p>
              <p className='p-2'>{ deeds[1] }</p>
              <p className='p-3'>{ deeds[2] }</p>
            </div>
          </div>
          <div className='poi-img-wrap-outer'>
            <div className='poi-img-wrap-inner'>
              <div className='image-wrap image-1'>
                <img src={ poiImage[0] } />
              </div>
              <div className='image-wrap image-2'>
                <img src={ poiImage[1] } />
              </div>
              <div className='image-wrap image-3'>
                <img src={ poiImage[2] } />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PoiSingleDisplay;