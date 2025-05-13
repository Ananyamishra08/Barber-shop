// components/Loader.js
import React from 'react';
import './Loading.css';
import video from '../assests/loading-video.mp4'; // Adjust the path as necessary
const Loading = () => {
  return (
    <div className="loader-container">
      <video autoPlay muted loop className="loader-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loading;
