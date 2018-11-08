import { connect } from 'react-redux'
import EncounteredPokemon from './EncounteredPokemon'

function mapStateToProps(state) {
  return {
    pokemonsEncountered: state.turn.pokemonsEncountered,
  }
}
function mapDispatchToProps(dispatch) {
  return {}
}

const EncounteredPokemonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounteredPokemon)

export default EncounteredPokemonContainer
