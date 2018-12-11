import get from 'lodash/get'

export default function getGameMode(state) {
  return get(state, 'app.gameMode')
}
