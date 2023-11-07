import React, { useState } from 'react';
import Linkify from 'react-linkify'; // Import Linkify

const PinForm = ({ onPinSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    comment: '',
    rating: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onPinSubmit(formData);
    setFormData({
      title: '',
      comment: '',
      rating: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Comment (you can enter links here)"
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      >
        <Linkify> {/* Wrap the textarea content in Linkify */}
          {formData.comment}
        </Linkify>
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
      <button type="submit">Add Pin</button>
    </form>
  );
};

export default PinForm;








// // PinForm.jsx
// import React from 'react';

// const PinForm = ({ pinInfo, setPinInfo, onPinSubmit }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onPinSubmit();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={pinInfo}
//         onChange={(e) => setPinInfo(e.target.value)}
//         placeholder="Enter pin information"
//       />
//       <button type="submit">Add Pin</button>
//     </form>
//   );
// };

// export default PinForm;



















// // import React, { useState } from 'react';

// // const PinForm = ({ onPinSubmit }) => {
// //   const [pinInfo, setPinInfo] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onPinSubmit(pinInfo);
// //     setPinInfo('');
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         value={pinInfo}
// //         onChange={(e) => setPinInfo(e.target.value)}
// //         placeholder="Enter pin information"
// //       />
// //       <button type="submit">Add Pin</button>
// //     </form>
// //   );
// // };

// // export default PinForm;
