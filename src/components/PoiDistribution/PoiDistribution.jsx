import './PoiDistribution.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IMAGES from '../../assets/Images.jsx';
import { Paths } from '../Paths/Paths.jsx';
import { PoiSingleDisplay } from '../PoiSingleDisplay/PoiSingleDisplay.jsx';
import { fetchCharacter, fetchCharacterQuotes } from '../ApiCalls/ApiCalls.jsx';

export function PoiDistribution ({ characterName, characterId, characterQuotes, characterDeeds }) {

  console.log(characterName, characterId, characterDeeds, '<-- PROPS IN POI DIST')
  
  let currentCharacter = {
    name: characterName,
    id: characterId,
    quotes: [],
    deeds: characterDeeds
  }

  console.log(currentCharacter.name, currentCharacter.id, characterDeeds, '<-- PROPS IN CURRENT CHARACTER')
  
  // let fetchedCharacter = fetchCharacter(currentCharacter.id)

  // console.log(fetchedCharacter, '<-- RAW CHARACTER DATA')
  // fetchedCharacter.then((data) => console.log(data, '<-- RAW CHARACTER DATA'))

  // let quotesToPush = fetchCharacterQuotes(currentCharacter.id)

  // console.log(quotesToPush, '<-- RAW QUOTE DATA')
  // quotesToPush().then((data) => console.log(data, '<-- RAW QUOTE DATA'))

  return (
    <div className='poi-distribution-container'>
      <div className='poi-links-wrap'>
        { currentCharacter.deeds.map((entry) => {
          return (
            <div className={`poi-and-link-container ${ entry.place }-poi-container`} onClick={ () => {
              console.log('click worked.')
              let poiBox = document.querySelector(`.${entry.place}`);
              if (poiBox.classList.contains('poi-hidden')) {
                poiBox.classList.remove('poi-hidden')
              } else {
                poiBox.classList.add('poi-hidden')
              }
            } 
          } >
              <img src={ IMAGES.Earendil } className={ `poi-image ${ entry.place }-image` } key={ `marker-for-${entry.place}` } />
              {/* <Link to={ `/Aragorn/${ entry.place }` } className={ `${entry.place}-image-link link-image` } /> */}
              <PoiSingleDisplay place={ entry.place } key={ `Aragorn-in-${entry.place}` } deeds={ entry.deed } poiImage={ entry.images } />
            </div>
          )
        }) }
        {/* <Routes>
          { currentCharacter.deeds.map((entry) => {
            return (
              <React.Fragment>
                <Route path={`/Aragorn/${ entry.place }`} element={<Paths id={ entry.place }>{ <PoiSingleDisplay place={ entry.place } deeds={ entry.deeds } poiImage={ IMAGES.Strider } /> }</Paths>} />
                <Route path={`/Aragorn/${ entry.place }`} element={ <PoiSingleDisplay place={ entry.place } deeds={ entry.deeds } poiImage={ IMAGES.Strider } /> } />
              </React.Fragment>
            )
          }) }
        </Routes> */}
          {/* { currentCharacter.deeds.map((entry) => {
            return (
              <PoiSingleDisplay place={ entry.place } deeds={ entry.deeds } poiImage={ IMAGES.Strider } />
            )
          }) } */}
      </div>      
    </div>
  );
}

export default PoiDistribution;