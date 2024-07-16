import { connect } from 'react-redux'
import Jukebox from './Jukebox'
import {
  songSelected,
  muteToggled,
  stopTheMusic,
  playTheMusic
} from '../../store/actions/Actions'
import getVolume from '../../store/selectors/volumeSelector'
import getPlaybackStatus from '../../store/selectors/playbackStatusSelector'
import getCurrentSong from '../../store/selectors/currentSongSelector'

function mapStateToProps(state) {
  return {
    currentSong: getCurrentSong(state),
    playbackStatus: getPlaybackStatus(state),
    volume: getVolume(state),
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
    }
  }
}

const JukeboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox)

export default JukeboxContainer
