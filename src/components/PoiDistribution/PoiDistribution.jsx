import './PoiDistribution.css';
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IMAGES from '../../assets/Images.jsx';
import { Paths } from '../Paths/Paths.jsx';
import { PoiSingleDisplay } from '../PoiSingleDisplay/PoiSingleDisplay.jsx';
import { fetchCharacter, fetchCharacterQuotes } from '../ApiCalls/ApiCalls.jsx';

export function PoiDistribution({ characterName, characterId, characterDeeds, quoteIds }) {

  console.log(characterName, characterId, characterDeeds, '<-- PROPS IN POI DIST')

  let currentCharacter = {
    name: characterName,
    id: characterId,
    quotes: [],
    deeds: characterDeeds
  }

  useEffect(() => {

    async function getQuotes() {
      let quotesToFilter = await fetchCharacterQuotes(currentCharacter.id)

      console.log(quotesToFilter)

      currentCharacter.deeds.map((deed) => {
        quotesToFilter.map((apiQuote) => {
          if (apiQuote.id === deed.quoteId[0]) {
            console.log(apiQuote.dialog, '<-- IN QUOTE FETCH')
            deed.quoteId.push(apiQuote.dialog);
          }
        })
      });
    }

    getQuotes()

    // let quotesToFilter = fetchCharacterQuotes(currentCharacter.id).then((data) => data);
    // console.log(quotesToFilter, '<-- IN QUOTE FETCH')
    // let quoteList = quotesToFilter.then((data) => data);
    // console.log(quotesToFilter, '<-- IN QUOTE FETCH 2')
    // let quoteList = currentCharacter.deeds.map((deed) => {
    //   quotesToFilter.map((apiQuote) => {
    //     if (apiQuote.id === deed.quoteId) {
    //       return apiQuote;
    //     }
    //   })
    // });
    // console.log(quoteList, '<-- IN QUOTE FETCH')
    // return quoteList;

    console.log(currentCharacter.deeds[0].quoteId, '<-- PROPS IN CURRENT CHARACTER IN USE EFFECT')


  }, [])

  // async function getQuotes(characterObj) {
  //   let quotesToFilter = await fetchCharacterQuotes(characterObj.id)

  // //  console.log(quotesToFilter, '<-- IN QUOTE FETCH')


  // };

  // console.log(currentCharacter.name, currentCharacter.id, currentCharacter.deeds, currentCharacter.deeds.quoteId[1], '<-- PROPS IN CURRENT CHARACTER')

  console.log(currentCharacter.deeds[0].quoteId, '<-- PROPS IN CURRENT CHARACTER')

  // let fetchedCharacter = fetchCharacter(currentCharacter.id)

  // console.log(fetchedCharacter, '<-- RAW CHARACTER DATA')
  // fetchedCharacter.then((data) => console.log(data, '<-- RAW CHARACTER DATA'))

  // let quotesToPush = fetchCharacterQuotes(currentCharacter.id)

  // console.log(getQuotes(currentCharacter.id), '<-- RAW QUOTE DATA')
  // quotesToPush().then((data) => console.log(data, '<-- RAW QUOTE DATA'))

  return (
    <div className='poi-distribution-container'>
      <div className='poi-links-wrap'>
        {currentCharacter.deeds.map((entry, idx) => {
          return (
            <div key={idx} className={`poi-and-link-container ${entry.place}-poi-container`} onClick={() => {
              console.log('click worked.')
              let poiBox = document.querySelector(`.${entry.place}-single-poi-container`);
              if (poiBox.classList.contains('poi-hidden')) {
                poiBox.classList.remove('poi-hidden')
              } else {
                poiBox.classList.add('poi-hidden')
              }
            }
            } >
              <img src={IMAGES.Earendil} className={`poi-image ${entry.place}-image`} key={`marker-for-${entry.place}`} />
              {/* <Link to={ `/Aragorn/${ entry.place }` } className={ `${entry.place}-image-link link-image` } /> */}
              <PoiSingleDisplay place={entry.place} key={`${currentCharacter.name}-in-${entry.place}`} deeds={entry.deed} poiImage={entry.images} poiQuotes={ entry.quoteId[1] } />
            </div>
          )
        })}
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