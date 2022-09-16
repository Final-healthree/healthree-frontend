import React from "react";
// import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

const VideoPlayer = () => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  )
}

export default VideoPlayer;