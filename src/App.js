import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "./resources/bootstrap.min.css";
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
    currentSong: state.currentSong
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: answer => {
      dispatch({ type: "ANSWER_SELECTED", answer });
      setTimeout(function() {
        dispatch({ type: "CONTINUE" });
      }, 1200);
    },
    onSongSelected: songName => {
      dispatch({ type: "SONG_SELECTED", songName });
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
  currentSong
}) {
  return (
    <div className="container-fluid">
      <Sound
        url={"/pokemonMusic/" + currentSong + ".mp3"}
        playStatus={Sound.status.PLAYING}
        volume={50}
        autoLoad={false}
        loop={true}
      />
      <div className="header">
        <Jukebox onSongSelected={onSongSelected} />
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
