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
export const PLAY_TIME_TRIAL_BACKGROUND_MUSIC =
  'PLAY_TIME_TRIAL_BACKGROUND_MUSIC'
export const PLAY_STANDARD_GAME_BACKGROUND_MUSIC =
  'PLAY_STANDARD_GAME_BACKGROUND_MUSIC'
export const PLAY_CREDITS_MUSIC = 'PLAY_CREDITS_MUSIC'
export const PLAYBACK_STATUS_PLAYING = 'PLAYING'
export const PLAYBACK_STATUS_STOPPED = 'STOPPED'
export const PLAYBACK_STATUS_PAUSED = 'PAUSED'
export const PLAY_THE_MUSIC = 'PLAY_THE_MUSIC'
export const STOP_THE_MUSIC = 'STOP_THE_MUSIC'
export const PAUSE_THE_MUSIC = 'PAUSE_THE_MUSIC'
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const CHANGE_GENERATIONS = 'CHANGE_GENERATIONS'
export const UPDATE_DAILY_LEADERBOARD = 'UPDATE_DAILY_LEADERBOARD'
export const UPDATE_MONTHLY_LEADERBOARD = 'UPDATE_MONTHLY_LEADERBOARD'
export const UPDATE_ALL_TIME_LEADERBOARD = 'UPDATE_ALL_TIME_LEADERBOARD'
export const SHOW_LEADERBOARD = 'SHOW_LEADERBOARD'
export const HIDE_LEADERBOARD = 'HIDE_LEADERBOARD'
export const GIVE_CONSENT = 'GIVE_CONSENT'

/*Action creators*/
export function showLeaderboard() {
  return { type: SHOW_LEADERBOARD }
}

export function hideLeaderboard() {
  return { type: HIDE_LEADERBOARD }
}

export function updateDailyLeaderboard(scores) {
  return { type: UPDATE_DAILY_LEADERBOARD, scores }
}

export function updateMonthlyLeaderboard(scores) {
  return { type: UPDATE_MONTHLY_LEADERBOARD, scores}
}

export function updateAllTimeLeaderboard(scores) {
  return { type: UPDATE_ALL_TIME_LEADERBOARD, scores}
}

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

export function nextTurn(turnData) {
  return { type: CONTINUE, turnData }
}

export function nextTTTurn(turnData) {
  return { type: TT_CONTINUE, turnData }
}

export function songSelected(songName) {
  return { type: SONG_SELECTED, songName }
}

export function muteToggled() {
  return { type: MUTE_TOGGLED }
}

export function resetStandardMode(turnData) {
  return { type: RESET_STANDARD_MODE, turnData }
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

export function playMusicForTTStarted(songName) {
  return { type: PLAY_TIME_TRIAL_BACKGROUND_MUSIC, songName }
}

export function playMusicForSGStarted(songName) {
  return { type: PLAY_STANDARD_GAME_BACKGROUND_MUSIC, songName }
}

export function playMusicForCredits(songName) {
  return { type: PLAY_CREDITS_MUSIC, songName }
}

export function stopTheMusic() {
  return { type: STOP_THE_MUSIC }
}

export function pauseTheMusic() {
  return { type: PAUSE_THE_MUSIC }
}

export function playTheMusic() {
  return { type: PLAY_THE_MUSIC }
}

export function showModal() {
  return { type: SHOW_MODAL }
}

export function hideModal() {
  return { type: HIDE_MODAL }
}

export function changeGenerations(generationsArray) {
  return { type: CHANGE_GENERATIONS, generationsArray }
}

export function giveConsent() {
  return { type: GIVE_CONSENT }
}