import React from "react";
import "./styles/app.scss";
//ADDING COMPONENTS//
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;