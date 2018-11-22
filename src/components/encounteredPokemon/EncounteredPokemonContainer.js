import { connect } from 'react-redux'
import EncounteredPokemon from './EncounteredPokemon'
import getEncounteredPokemon from '../../store/selectors/pokemonEncounteredSelector'

function mapStateToProps(state) {
  return {
    pokemonsEncountered: getEncounteredPokemon(state),
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
