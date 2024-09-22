import './Paths.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PoiDistribution from '../PoiDistribution/PoiDistribution.jsx';
import AragornPath from '../../assets/CharacterPaths/Aragorn/AragornPathComp.jsx';
import aragornData from '../../assets/CharacterPaths/CharacterData.jsx';
import Aragorn from '../../assets/CharacterPaths/Aragorn/Aragorn Path.svg';

export function Paths(props) {

  const { character, id, characterDeeds, quoteIds } = props;

  return (
    <div className={character}>
      <div className='svg-path-wrap'>
        <PoiDistribution characterName={ character } characterId={ id } characterDeeds={ characterDeeds } quoteIds={ quoteIds } />
        {props.children}
      </div>
    </div>
  );
};

export default Paths;
