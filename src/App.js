import React, { useState } from "react";
import "./styles/app.scss";
//ADDING COMPONENTS//
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

import data from "./util";

function App() {
  //STATE//
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
      <Library songs={songs} /> 
    </div>
  );
}

export default App;
