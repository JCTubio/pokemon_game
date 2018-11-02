import React, { Component, Fragment } from "react";
import SongItem from "./SongItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faVolumeMute,
  faVolumeUp
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import "./jukebox.css";
import Sound from "react-sound";

library.add(faMusic);
library.add(faVolumeMute);
library.add(faVolumeUp);

export default class Jukebox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "noDisplay"
    };
    this.changeDisplayValue = this.changeDisplayValue.bind(this);
  }

  changeDisplayValue = () => {
    if (this.state.displayValue === "noDisplay") {
      this.setState({ displayValue: "" });
    } else {
      this.setState({ displayValue: "noDisplay" });
    }
  };

  render() {
    return (
      <Fragment>
        <Sound
          url={"/pokemonMusic/" + this.props.currentSong + ".mp3"}
          playStatus={
            this.props.playbackStatus
              ? Sound.status.PLAYING
              : Sound.status.PAUSED
          }
          volume={50}
          autoLoad={false}
          loop={true}
        />
        <Button
          type="primary"
          shape="circle"
          size="large"
          onClick={this.changeDisplayValue}
        >
          <FontAwesomeIcon icon="music" />
        </Button>
        <Button
          ghost
          size="large"
          className={"muteToggle " + this.state.displayValue}
          onClick={this.props.onMuteToggled}
        >
          <FontAwesomeIcon
            icon={this.props.playbackStatus ? "volume-up" : "volume-mute"}
          />
        </Button>
        <ul className={"songList " + this.state.displayValue}>
          <li className="songItem">
            <SongItem
              songName="The Pokemon Journey"
              onClick={this.props.onSongSelected}
            />
          </li>
          <li className="songItem">
            <SongItem
              songName="Battle Theme (Instrumental)"
              onClick={this.props.onSongSelected}
            />
          </li>
          <li className="songItem">
            <SongItem
              songName="Battle Theme (8-Bits)"
              onClick={this.props.onSongSelected}
            />
          </li>
        </ul>
      </Fragment>
    );
  }
}
