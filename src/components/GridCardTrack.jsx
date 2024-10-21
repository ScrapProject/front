import React, { useState } from 'react';
import CardTrack from './CardTrack';
import CardNewTrack from './CardNewTrack';
import PopupAddTrack from './PopupAddTrack';
import './GridCardTrack.sass';

function GridCardTrack() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [tracks, setTracks] = useState([]);

  const handleCardClick = () => {
    console.log('okok')
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const addTrack = (title) => {
    setTracks([...tracks, { title }]);
  };

  return (
    <div id="grid-card-track">      
      <CardNewTrack onClick={handleCardClick} />
      {tracks.map((track, index) => (
        <CardTrack key={index} title={track.title} />
      ))}
      <PopupAddTrack isOpen={isPopupOpen} onClose={closePopup} onAddTrack={addTrack} />
    </div>
  );
}

export default GridCardTrack;
