import React, { useState } from 'react';
import './PopupAddTrack.sass';

const PopupAddTrack = ({ isOpen, onClose, onAddTrack }) => {
  const [title, setTitle] = useState('');

  const handleAddTrack = () => {
    if (title.trim()) {
      onAddTrack(title);
      setTitle(''); 
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Ajouter un nouveau suivie</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre du Suivie"
        />
        <button onClick={handleAddTrack}>Ajouter</button>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default PopupAddTrack;
