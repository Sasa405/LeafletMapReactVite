import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import PinForm from './PinForm';
import './index.css';
import Linkify from 'react-linkify'; // Import the Linkify component

const App = () => {
  const [formData, setFormData] = useState({
    title: '',
    comment: '',
    rating: 0,
  });
  const [pins, setPins] = useState([]);
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    const [pins, setPins] = useState([]);

    // Add a new pin with title, comment, and rating
    const newPin = {
      id: pins.length + 1,
      coordinates: [lat, lng],
      title: formData.title,
      comment: formData.comment,
      rating: formData.rating,
    };
    setPins([...pins, newPin]);
    // Clear the form data
    setFormData({
      title: '',
      comment: '',
      rating: 0,
    });
  };

  const handlePinDelete = (pinId) => {
    const updatedPins = pins.filter((pin) => pin.id !== pinId);
    setPins(updatedPins);
  };

  return (
    <div>
      <div className="pin-form">
        <h2>Add a New Pin</h2>
        <form>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <textarea
            placeholder="Comment"
            value={formData.comment}
          >
            {/* Wrap the comment input with Linkify */}
            <Linkify>{formData.comment}</Linkify>
          </textarea>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={`star ${formData.rating >= value ? 'selected' : ''}`}
                onClick={() => setFormData({ ...formData, rating: value })}
              >
                &#9733;
              </span>
            ))}
          </div>
            <button type="button" onClick={() => handleMapClick()}>
              Add Pin
            </button>
          </form>
        </div>
        <MapComponent pins={pins} onMapClick={handleMapClick} onPinDelete={handlePinDelete} />
      </div>
    );
  // This code block will run only once when the component is mounted (double-clicked)
  // You can set initial pins here if needed
  // Example:

};

export default App;








// // App.jsx
// import React, { useState } from 'react';
// import MapComponent from './MapComponent';
// import PinForm from './PinForm';
// import './index.css';

// const App = () => {
//   // Define the state for pins and pin info
//   const [pins, setPins] = useState([]);
//   const [pinInfo, setPinInfo] = useState('');

//   // Function to handle map click and add a pin
//   const handleMapClick = (e) => {
//     const { lat, lng } = e.latlng;
//     const newPin = {
//       id: pins.length + 1,
//       coordinates: [lat, lng],
//     };
//     setPins([...pins, newPin]);
//   };

//   // Function to handle pin info submission
//   const handlePinSubmit = () => {
//     // Create an object with pin info
//     const newPinInfo = {
//       id: pins.length,
//       info: pinInfo,
//     };
//     setPinInfo(''); // Clear the pin info input
//     console.log('Received pin info:', newPinInfo);
//   };

//   return (
//     <div>
//       <PinForm
//         pinInfo={pinInfo}
//         setPinInfo={setPinInfo}
//         onPinSubmit={handlePinSubmit}
//       />
//       <MapComponent pins={pins} onMapClick={handleMapClick} />
//     </div>
//   );
// };

// export default App;


















// // import React, { useState } from 'react';
// // import MapComponent from './MapComponent';
// // import PinForm from './PinForm';
// // import './index.css';

// // const App = () => {
// //   const [pins, setPins] = useState([]);

// //   const handleMapClick = (e) => {
// //     const { lat, lng } = e.latlng;
// //     console.log('App.jsx: Clicked on map at:', lat, lng);
// //     const newPin = {
// //       id: pins.length + 1,
// //       coordinates: [lat, lng],
// //     };
// //     setPins([...pins, newPin]);
// //   };

// //   const handlePinSubmit = (pinInfo) => {
// //     // Logik zur Verarbeitung des Pins hier
// //     console.log('Received pin info:', pinInfo);
// //   };

// //   const handlePinAdd = (newPin) => {
// //     setPins([...pins, newPin]);
// //   };

// //   return (
// //     <div>
// //       <PinForm onPinSubmit={handlePinSubmit} />
// //       <MapComponent pins={pins} onMapClick={handleMapClick} onPinAdd={handlePinAdd} />
// //     </div>
// //   );
// // };

// // export default App;
