import { connect } from 'react-redux'
import Jukebox from './Jukebox'
import {
  songSelected,
  muteToggled,
  stopTheMusic,
  playTheMusic,
} from '../../store/actions/Actions'

function mapStateToProps(state) {
  return {
    currentSong: state.jukebox.currentSong,
    playbackStatus: state.jukebox.playbackStatus,
    volume: state.jukebox.volume,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onSongSelected: songName => {
      dispatch(stopTheMusic())
      dispatch(songSelected(songName))
      setTimeout(function() {
        dispatch(playTheMusic())
      }, 10)
    },
    onMuteToggled: () => {
      dispatch(muteToggled())
    },
  }
}

const JukeboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox)

export default JukeboxContainer
