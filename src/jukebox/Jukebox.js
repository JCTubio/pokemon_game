import React, { Component, Fragment } from "react";
import SongItem from "./SongItem";

export default class Jukebox extends Component {
  render() {
    return (
      <Fragment>
        <ul className="songList">
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
