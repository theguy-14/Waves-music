import React, { useState,useRef } from 'react';
//Importing Styles
import './styles/app.scss';
//Adding Components
import Player from "./components/Player";
import Song from './components/Song';
import Library from './components/Library';
import Nav from "./components/Nav";
//Import data
import music_data from './data';

function App() {
  //Ref 
  const audioRef = useRef(null);
  //State
  const [songs,setSongs] = useState(music_data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0, 
    duration: 0,
    animationPercentage: 0,
});
const [libraryStatus,setLibraryStatus] = useState(false);
const timeUpdateHandler = (e) => {
  const current =  e.target.currentTime;
  const duration = e.target.duration;
  //Calculate Percentage
  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animation = Math.round((roundedCurrent / roundedDuration)*100);
  setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage: animation});
};
const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  audioRef.current.pause();
  if(isPlaying) {
    setTimeout(() => {
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }, 0);
  }
};
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} isPlaying={isPlaying}/>
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying = {isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library 
        audioRef={audioRef}
        songs = {songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
