import React from 'react';
import './CardTrack.sass';

function CardTrack({onClick}) {
  return (
    <div className='card-track' onClick={onClick}>
      <img src='/img/logo/plus.svg' alt="ajouter un suivie">
      </img>
    </div>
  );
}

export default CardTrack;
