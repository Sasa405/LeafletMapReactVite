import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

import './MapComponent.css';

const MapComponent = ({ pins, onMapClick, onPinDelete }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map').setView([51.505, -0.09], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      map.on('dblclick', onMapClick);

      mapRef.current = map;
    } else {
      const map = mapRef.current;
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      pins.forEach((pin) => {
        const marker = L.marker(pin.coordinates).addTo(map);

        // Create a popup with title, comment, and rating fields
        const popupContent = document.createElement('div');

        const titleInput = document.createElement('input');
        titleInput.type = 'url';
        titleInput.value = pin.title || '';
        popupContent.appendChild(titleInput);

        const commentInput = document.createElement('textarea');
        commentInput.value = pin.comment || '';

        // Create a function to convert URLs to clickable links
        const convertToLinks = (text) => {
          return text.replace(/(https?:\/\/[^\s]+)/g, (url) => {
            return `<a href="${url}" target="_blank">${url}</a>`;
          });
        };

        commentInput.innerHTML = convertToLinks(pin.comment);

        popupContent.appendChild(commentInput);

        const ratingContainer = document.createElement('div');
        ratingContainer.className = 'rating-container';
        for (let i = 1; i <= 5; i++) {
          const star = document.createElement('span');
          star.className = `star ${pin.rating >= i ? 'selected' : ''}`;
          star.innerHTML = '&#9733;';
          star.addEventListener('click', () => {
            pin.rating = i;
            updateRatingStars(ratingContainer, i);
          });
          ratingContainer.appendChild(star);
        }
        popupContent.appendChild(ratingContainer);

        const saveButton = document.createElement('button');
        saveButton.innerText = 'Save';
        saveButton.addEventListener('click', () => {
          pin.title = titleInput.value;
          pin.comment = commentInput.value;
          marker.getPopup().setContent(titleInput.value);
          marker.closePopup();
        });
        popupContent.appendChild(saveButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
          onPinDelete(pin.id);
          marker.closePopup();
        });
        popupContent.appendChild(deleteButton);

        commentInput.addEventListener('click', (e) => {
          if (e.target.tagName === 'A') {
            window.open(e.target.getAttribute('href'), '_blank');
          }
        });

        marker.bindPopup(popupContent).openPopup();
      });
    }
  }, [pins, onMapClick, onPinDelete]);

  const updateRatingStars = (container, rating) => {
    const stars = container.getElementsByClassName('star');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('selected');
      } else {
        stars[i].classList.remove('selected');
      }
    }
  };

  return <div id="map" className="map-container" />;
};

export default MapComponent;






// // 1.MapComponent.jsx
// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';

// const MapComponent = ({ pins, onMapClick }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     // Check if the map container has not been initialized yet
//     if (!mapRef.current) {
//       // Create and initialize the map with an enlarged view
//       const map = L.map('map').setView([51.505, -0.09], 6);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//       }).addTo(map);

//       map.on('dblclick', onMapClick);

//       mapRef.current = map; // Store the map instance in the ref
//     } else {
//       // The map container has already been initialized, update the pins
//       const map = mapRef.current;
//       pins.forEach((pin) => {
//         const marker = L.marker(pin.coordinates).addTo(map);
//         marker.bindPopup(pin.info || 'No comment').openPopup();
//       });
//     }
//   }, [pins, onMapClick]);

//   return <div id="map" style={{ height: '600px' }} />;
// };

// export default MapComponent;







// // MapComponent.jsx
// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';

// const MapComponent = ({ pins, onMapClick }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     // Check if the map container has not been initialized yet
//     if (!mapRef.current) {
//       // Create and initialize the map
//       const map = L.map('map').setView([51.505, -0.09], 13);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//       }).addTo(map);

//       map.on('dblclick', onMapClick);

//       mapRef.current = map; // Store the map instance in the ref
//     } else {
//       // The map container has already been initialized, update the pins
//       const map = mapRef.current;
//       pins.forEach((pin) => {
//         L.marker(pin.coordinates).addTo(map);
//       });
//     }
//   }, [pins, onMapClick]);

//   return <div id="map" style={{ height: '400px' }} />;
// };

// export default MapComponent;






