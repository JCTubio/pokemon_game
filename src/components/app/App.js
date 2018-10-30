import React from "react";
import "./App.css";
import "../../resources/bootstrap.min.css";
import "antd/dist/antd.css";
import Turn from "../pokedex/Turn";
import JukeboxContainer from "../jukebox/JukeboxContainer";

const App = ({
  turnData,
  highlight,
  onAnswerSelected,
  turnNumber,
  clickedThisTurn,
  correctAnswers,
  wrongAnswers,
  buttonHighlight
}) => {
  return (
    <div className="container-fluid">
      <div className="header">
        {console.log(turnData)}
        <JukeboxContainer />
        <img
          src="../../images/whosthatpokemon.png"
          alt="title"
          className="headerImg"
        />
      </div>
      <div className="turnContainer">
        <div className="leftSpace" />
        <Turn
          key={turnNumber}
          {...turnData}
          highlight={highlight}
          onAnswerSelected={onAnswerSelected}
          clickedThisTurn={clickedThisTurn}
          buttonHighlight={buttonHighlight}
        />
        <div className="rightSpace" />
      </div>
      <h2 className="score">
        {correctAnswers}:{wrongAnswers}
      </h2>
    </div>
  );
};

export default App;

/*
const App = function({
  turnData,
  highlight,
  onAnswerSelected,
  turnNumber,
  clickedThisTurn,
  correctAnswers,
  wrongAnswers,
  onSongSelected,
  currentSong,
  onMuteToggled,
  playbackStatus,
  buttonHighlight
}) {
  return (
    <div className="container-fluid">
      <Sound
        url={"/pokemonMusic/" + currentSong + ".mp3"}
        playStatus={playbackStatus ? Sound.status.PLAYING : Sound.status.PAUSED}
        volume={50}
        autoLoad={false}
        loop={true}
      />
      <div className="header">
        <Jukebox
          onSongSelected={onSongSelected}
          onMuteToggled={onMuteToggled}
          playbackStatus={playbackStatus}
        />
        <img
          src="../../images/whosthatpokemon.png"
          alt="title"
          className="headerImg"
        />
      </div>
      <div className="turnContainer">
        <div className="leftSpace" />
        <Turn
          key={turnNumber}
          {...turnData}
          highlight={highlight}
          onAnswerSelected={onAnswerSelected}
          clickedThisTurn={clickedThisTurn}
          buttonHighlight={buttonHighlight}
        />
        <div className="rightSpace" />
      </div>
      <h2 className="score">
        {correctAnswers}:{wrongAnswers}
      </h2>
    </div>
  );
};*/
