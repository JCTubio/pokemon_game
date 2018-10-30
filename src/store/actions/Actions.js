/*Action types*/
export const ANSWER_SELECTED = "ANSWER_SELECTED";
export const CONTINUE = "CONTINUE";
export const SONG_SELECTED = "SONG_SELECTED";
export const MUTE_TOGGLED = "MUTE_TOGGLED";

/*Action creators*/
export function answerSelected(answer) {
  return { type: ANSWER_SELECTED, answer };
}
export function nextTurn() {
  return { type: CONTINUE };
}
export function songSelected(songName) {
  return { type: SONG_SELECTED, songName };
}
export function muteToggled(playbackStatus) {
  return { type: MUTE_TOGGLED, playbackStatus };
}
