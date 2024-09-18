import './paths.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function Paths (props) {
  return(
    <Link to={ '/paths/:id' }>
      <div className={ props.character }>
        <img src={ props.children } />
      </div>
    </Link>
  );
};

export default Paths;