import React from 'react';
import '../App.scss';

function Card({ character }) {
    return(
      <div className="card-container">
          <div className="card-inner">
            <div className="card-front">
                <img src={character.img} alt='' />
            </div>
            <div className="card-back">
                <h3>{ character.name }</h3>
                <span>{character.nickname}</span>
                <ul>
                    <li>Occupation: {character.occupation.join(', ')}</li>
                    <li>Status: {character.status}</li>
                    <li>Portrayed by: {character.portrayed}</li>
                </ul>
            </div>
          </div>
      </div>
    );
}

export default Card;