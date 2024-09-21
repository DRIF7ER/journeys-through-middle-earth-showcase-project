import './PoiDistribution.css';
import React, { useEffect } from 'react';
import IMAGES from '../../assets/Images.jsx';
import { PoiSingleDisplay } from '../PoiSingleDisplay/PoiSingleDisplay.jsx';
import { fetchCharacterQuotes } from '../ApiCalls/ApiCalls.jsx';

export function PoiDistribution({ characterName, characterId, characterDeeds }) {

  let currentCharacter = {
    name: characterName,
    id: characterId,
    quotes: [],
    deeds: characterDeeds
  }

  useEffect(() => {

    async function getQuotes() {
      let quotesToFilter = await fetchCharacterQuotes(currentCharacter.id)

      currentCharacter.deeds.map((deed) => {
        quotesToFilter.map((apiQuote) => {
          if (apiQuote.id === deed.quoteId[0]) {
            deed.quoteId.push(apiQuote.dialog);
          }
        })
      });
    }

    getQuotes()
  }, [])

  return (
    <div className='poi-distribution-container'>
      <div className='poi-links-wrap'>
        {currentCharacter.deeds.map((entry, idx) => {
          return (
            <div key={idx} className={`poi-and-link-container ${entry.place}-poi-container`} onClick={() => {
              let poiBox = document.querySelector(`.${entry.place}-single-poi-container`);
              if (poiBox.classList.contains('poi-hidden')) {
                poiBox.classList.remove('poi-hidden')
              } else {
                poiBox.classList.add('poi-hidden')
              }
            }
            } >
              <img src={IMAGES.Earendil} className={`poi-image ${entry.place}-image`} key={`marker-for-${entry.place}`} />
              <PoiSingleDisplay place={entry.place} key={`${currentCharacter.name}-in-${entry.place}`} deeds={entry.deed} poiImage={entry.images} poiQuotes={ entry.quoteId[1] } />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default PoiDistribution;