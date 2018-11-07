/*Action types*/
export const ANSWER_SELECTED = 'ANSWER_SELECTED'
export const CONTINUE = 'CONTINUE'
export const TT_ANSWER_SELECTED = 'TT_ANSWER_SELECTED'
export const TT_CONTINUE = 'TT_CONTINUE'
export const NATURAL_TIME_COUNTDOWN = 'NATURAL_TIME_COUNTDOWN'
export const SONG_SELECTED = 'SONG_SELECTED'
export const MUTE_TOGGLED = 'MUTE_TOGGLED'
export const STANDARD_MODE = 'STANDARD_MODE'
export const TIME_TRIAL = 'TIME_TRIAL'
export const GAME_FINISHED = 'GAME_FINISHED'
export const CHANGE_GAME_MODE = 'CHANGE_GAME_MODE'
export const RESET_STANDARD_MODE = 'RESET_STANDARD_MODE'
export const RESET_TT_MODE = 'RESET_TT_MODE'
export const ROTOM_TALK = 'ROTOM_TALK'
export const TT_GAME_FINISHED = 'TT_GAME_FINISHED'

/*Action creators*/
export function changeGameMode(mode) {
  return { type: CHANGE_GAME_MODE, mode }
}
export function answerSelected(answer) {
  return { type: ANSWER_SELECTED, answer }
}

export function ttAnswerSelected(answer) {
  return { type: TT_ANSWER_SELECTED, answer }
}

export function naturalTimeCountdown() {
  return { type: NATURAL_TIME_COUNTDOWN }
}
export function nextTurn() {
  return { type: CONTINUE }
}
export function nextTTTurn() {
  return { type: TT_CONTINUE }
}
export function songSelected(songName) {
  return { type: SONG_SELECTED, songName }
}
export function muteToggled(playbackStatus) {
  return { type: MUTE_TOGGLED, playbackStatus }
}
export function resetStandardMode() {
  return { type: RESET_STANDARD_MODE }
}
export function resetTTMode() {
  return { type: RESET_TT_MODE }
}

export function rotomTalk(answer) {
  return { type: ROTOM_TALK, answer }
}

export function gameFinished() {
  return { type: GAME_FINISHED }
}
export function ttGameFinished() {
  return { type: TT_GAME_FINISHED }
}
