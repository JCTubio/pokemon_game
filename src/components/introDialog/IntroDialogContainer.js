import { connect } from 'react-redux'
import IntroDialog from './IntroDialog'
import {
  stopTheMusic,
  playTheMusic,
  playMusicForSGStarted
} from '../../store/actions/Actions'
import {
  getChillSong
} from '../../store/selectors/musicHelper'

function mapDispatchToProps(dispatch) {
  return {
    onOkSelected: () => {
      dispatch(playTheMusic())
      dispatch(playMusicForSGStarted(getChillSong()))
    },
    onNoSelected: () => {
      dispatch(stopTheMusic())
    }
  }
}

const IntroDialogContainer = connect(
  null,
  mapDispatchToProps
)(IntroDialog)

export default IntroDialogContainer
