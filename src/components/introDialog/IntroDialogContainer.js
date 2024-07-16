import { connect } from 'react-redux'
import IntroDialog from './IntroDialog'
import {
  stopTheMusic,
  giveConsent
} from '../../store/actions/Actions'

function mapDispatchToProps(dispatch) {
  return {
    onOkSelected: () => {
      dispatch(giveConsent())
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
