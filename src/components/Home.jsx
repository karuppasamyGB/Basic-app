// // import React from 'react';
// // import heroVideo from '../assets/hero1.mp4';
// // import Navbar from './Navbar'; 
// // import './Home.css';

// // const Home = () => {
// //   return (
// //     <div className="home-container">
// //       <Navbar />
// //       <video autoPlay muted loop className="background-video">
// //         <source src={heroVideo} type="video/mp4" />
// //         Your browser does not support the video tag.
// //       </video>
// //       <div className="content">
// //         <h1>Welcome to Music Hub</h1>
// //         <p>Experience the best music in every beat.</p>
// //         <button className="cta-button">Explore Now</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;


// after animation

import React, { useState } from 'react';
import heroVideo from '../assets/hero1.mp4';
import Navbar from './Navbar'; 
import './Home.css';
import guitarImage from '../assets/guitar.png'; // Add a guitar image to your assets folder

const Home = () => {
  const [showGuitars, setShowGuitars] = useState(false);

  const handleButtonClick = () => {
    setShowGuitars(true);
    setTimeout(() => setShowGuitars(false), 3000); // Hide guitars after 3 seconds
  };

  return (
    <div className="home-container">
      <Navbar />
      <video autoPlay muted loop className="background-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to Music Hub</h1>
        <p>Experience the best music in every beat.</p>
        <button className="cta-button" onClick={handleButtonClick}>Explore Now</button>
      </div>
      {showGuitars && (
        <div className="guitar-container">
          {[...Array(10)].map((_, index) => (
            <img key={index} src={guitarImage} className="guitar-image" alt="Guitar" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
