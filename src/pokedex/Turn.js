import React from "react";
import Pokemon from "./Pokemon";

export default class Turn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spriteImg: null
    };
  }
  componentDidMount = () => {
    this.getPkmnSprite();
  };

  getPkmnSprite = () => {
    fetch(
      "https://pokeapi.co/api/v2/pokemon/" + parseInt(this.props.sprite.id, 10)
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ spriteImg: data.sprites.front_default });
      });
  };

  render() {
    const {
      options,
      highlight,
      onAnswerSelected,
      clickedThisTurn
    } = this.props;

    return (
      <div className="turn">
        <img src="/images/pokedex.png" className="pokedex" alt="pokedex" />
        {this.state.spriteImg ? (
          <img
            src={this.state.spriteImg}
            className="pkmnSprite"
            alt="sprite"
            style={{
              filter: highlight ? "" : "brightness(0)"
            }}
          />
        ) : (
          <div />
        )}
        <div className="respuestas">
          {options.map(name => (
            <Pokemon
              key={name}
              name={name}
              onClick={onAnswerSelected}
              disabled={clickedThisTurn}
            />
          ))}
        </div>
      </div>
    );
  }
}
