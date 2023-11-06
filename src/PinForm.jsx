import React, { useState } from 'react';

const PinForm = ({ onPinSubmit }) => {
  const [pinInfo, setPinInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPinSubmit(pinInfo);
    setPinInfo(''); // Zurücksetzen des Eingabefelds nach dem Absenden
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={pinInfo}
        onChange={(e) => setPinInfo(e.target.value)}
        placeholder="Enter pin information"
      />
      <button type="submit">Add Pin</button>
    </form>
  );
};

export default PinForm;
