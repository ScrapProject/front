import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import CardTrack from './CardTrack';
import CardNewTrack from './CardNewTrack';
import PopupAddTrack from './PopupAddTrack';
import './GridCardTrack.sass';

function GridCardTrack() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [tracks, setTracks] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const p = queryParams.get('p');

  const handleCardClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const addTrack = (title) => {
    setTracks([...tracks, { title }]);
  };

  return (
    <>    

      Ajouter un suivie : <b>{p}</b>

      <div id="grid-card-track">        
        <CardNewTrack onClick={handleCardClick} />
        {tracks.map((track, index) => (
          <CardTrack key={index} title={track.title} />
        ))}
        <PopupAddTrack isOpen={isPopupOpen} onClose={closePopup} onAddTrack={addTrack} />
      </div>
    </>
  );
}

export default GridCardTrack;
