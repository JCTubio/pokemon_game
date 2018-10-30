import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "./resources/bootstrap.min.css";
import "antd/dist/antd.css";
import Turn from "./pokedex/Turn";
import Sound from "react-sound";
import Jukebox from "./jukebox/Jukebox";

function mapStateToProps(state) {
  return {
    turnData: state.turnData,
    highlight: state.highlight,
    turnNumber: state.turnNumber,
    clickedThisTurn: state.clickedThisTurn,
    correctAnswers: state.correctAnswers,
    wrongAnswers: state.wrongAnswers,
    currentSong: state.currentSong,
    playbackStatus: state.playbackStatus,
    buttonHighlight: state.buttonHighlight
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: answer => {
      dispatch({ type: "ANSWER_SELECTED", answer });
      setTimeout(function() {
        dispatch({ type: "CONTINUE" });
      }, 1000);
    },
    onSongSelected: songName => {
      dispatch({ type: "SONG_SELECTED", songName });
    },
    onMuteToggled: playbackStatus => {
      dispatch({ type: "MUTE_TOGGLED", playbackStatus });
    }
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({
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
});

export default App;
