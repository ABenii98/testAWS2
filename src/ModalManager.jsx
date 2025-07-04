import React from 'react';
import AddCollectible from './AddCollectible';
import AddRaffle from './AddRaffle';

function ModalManager({ showAddCollectible, showAddRaffle, onClose }) {
  const hardOverlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 9999,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'auto',
  };

  return (
    <>
      {showAddCollectible && (
        <div style={hardOverlay}>
          <AddCollectible onClose={() => onClose('collectible')} />
        </div>
      )}
      {showAddRaffle && (
        <div style={hardOverlay}>
          <AddRaffle onClose={() => onClose('raffle')} />
        </div>
      )}
    </>
  );
}

export default ModalManager;
