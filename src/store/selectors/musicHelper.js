import listAvailableSongs from '../../components/jukebox/availableMusic'
import { sample } from 'underscore'

export function getChillSong() {
  let chillSong = sample(listAvailableSongs().chillSongs)
  return chillSong === 'Pokemon Tower in Lavender Town.mp3'
    ? sample(listAvailableSongs().chillSongs)
    : chillSong
}

export function getIntenseSong() {
  return sample(listAvailableSongs().intenseSongs)
}

export function getCreditsSong() {
  return sample(listAvailableSongs().creditsSongs)
}
