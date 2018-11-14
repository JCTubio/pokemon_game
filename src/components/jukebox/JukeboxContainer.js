import { connect } from 'react-redux'
import Jukebox from './Jukebox'
import { songSelected, muteToggled } from '../../store/actions/Actions'

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
      dispatch(songSelected(songName))
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
