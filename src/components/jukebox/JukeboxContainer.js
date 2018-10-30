import { connect } from "react-redux";
import Jukebox from "./Jukebox";
import { songSelected, muteToggled } from "../../store/actions/Actions";

function mapStateToProps(state) {
  return {
    currentSong: state.jukebox.currentSong,
    playbackStatus: state.jukebox.playbackStatus
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onSongSelected: songName => {
      dispatch(songSelected(songName));
    },
    onMuteToggled: playbackStatus => {
      dispatch(muteToggled(playbackStatus));
    }
  };
}

const JukeboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);

export default JukeboxContainer;
