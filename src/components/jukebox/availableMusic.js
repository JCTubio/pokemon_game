export const PEWTER_CITY = 'Pewter City Music.mp3'
export const POKEMON_TOWER = 'Pokemon Tower in Lavender Town.mp3'
export const VIRIDIAN_FOREST = 'Viridian Forest.mp3'
export const PIANO_CREDITS = 'Pokemon Credits Piano Music.mp3'
export const RED_BLUE_ENDING = 'Pokemon Red Blue  Yellow Ending Theme.mp3'
export const FINAL_RIVAL_BATTLE = 'Final Rival Battle.mp3'
export const TEAM_ROCKET_HIDEOUT = 'Team Rocket Hideout.mp3'
export const TRAINER_BATTLE = 'Trainer Battle.mp3'
export const WILD_BATTLE = 'Wild Battle.mp3'

export default function listAvailableMusic() {
  return {
    chillSongs: [PEWTER_CITY, POKEMON_TOWER, VIRIDIAN_FOREST],
    intenseSongs: [
      FINAL_RIVAL_BATTLE,
      TEAM_ROCKET_HIDEOUT,
      TRAINER_BATTLE,
      WILD_BATTLE,
    ],
    creditsSongs: [PIANO_CREDITS, RED_BLUE_ENDING],
  }
}
