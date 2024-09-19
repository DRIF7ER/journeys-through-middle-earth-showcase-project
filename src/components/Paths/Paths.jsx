import './paths.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Aragorn from '../../assets/CharacterPaths/Aragorn/Aragorn Path.svg';

export function Paths(props) {
  return (
    // <Link to={ '/paths/:id' }>
    //   <div className={ props.character }>
    //     {/* <img className={ `${ props.character }-path` } src={ props.children } /> */}
    //     { props.children }
    //   </div>
    // </Link>
    <div className={props.character}>
      {/* <img className={ `${ props.character }-path` } src={ props.children } /> */}
      {props.children}
      {/* { console.log(document.querySelector('.Aragorn-path path').getTotalLength()) } */}
    </div>
  );
};

export default Paths;