import './paths.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PoiDistribution from '../PoiDistribution/PoiDistribution.jsx';
import aragornData from '../../assets/CharacterPaths/CharacterDataForAPI.jsx';
import Aragorn from '../../assets/CharacterPaths/Aragorn/Aragorn Path.svg';

export function Paths(props) {

  const { character, id, characterDeeds } = props;

  console.log(characterDeeds, '<-- FROM PATHS')

  return (
    <div className={props.character}>
      <PoiDistribution characterName={ character } characterId={ id } characterDeeds={ characterDeeds } />
      <div className='svg-path-wrap'>
        {props.children}
      </div>
    </div>
  );
};

export default Paths;