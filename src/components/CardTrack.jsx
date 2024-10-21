import React from 'react';
import './CardTrack.sass';

function CardTrack({title}) {
  return (
    <div className='card-track'>
      <div className='card-track-title'>
        { title }
      </div>
    </div>
  );
}

export default CardTrack;
