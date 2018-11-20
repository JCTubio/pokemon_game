import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeGenerations } from '../../store/actions/Actions'
import './generationFilter.css'

function mapStateToProps(state) {
  return {
    generations: state.turn.generations,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGenerationChanged: generationsFromFilter => {
      dispatch(changeGenerations(generationsFromFilter))
    },
  }
}

class GenerationFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kanto: this.props.generations.indexOf(1) === -1 ? false : true,
      johto: this.props.generations.indexOf(2) === -1 ? false : true,
      hoenn: this.props.generations.indexOf(3) === -1 ? false : true,
      sinnoh: this.props.generations.indexOf(4) === -1 ? false : true,
      unova: this.props.generations.indexOf(5) === -1 ? false : true,
      kalos: this.props.generations.indexOf(6) === -1 ? false : true,
    }
    this.handleKantoClicked = this.handleKantoClicked.bind(this)
    this.handleJohtoClicked = this.handleJohtoClicked.bind(this)
    this.handleHoennClicked = this.handleHoennClicked.bind(this)
    this.handleSinnohClicked = this.handleSinnohClicked.bind(this)
    this.handleUnovaClicked = this.handleUnovaClicked.bind(this)
    this.handleKalosClicked = this.handleKalosClicked.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = () => {
    let genArray = []
    if (this.state.kanto) {
      genArray = genArray.concat(1)
    }
    if (this.state.johto) {
      genArray = genArray.concat(2)
    }
    if (this.state.hoenn) {
      genArray = genArray.concat(3)
    }
    if (this.state.sinnoh) {
      genArray = genArray.concat(4)
    }
    if (this.state.unova) {
      genArray = genArray.concat(5)
    }
    if (this.state.kalos) {
      genArray = genArray.concat(6)
    }
    this.props.onGenerationChanged(genArray)
  }

  handleKantoClicked = () => {
    this.state.kanto
      ? this.setState({ kanto: false })
      : this.setState({ kanto: true })
  }

  handleJohtoClicked = () => {
    this.state.johto
      ? this.setState({ johto: false })
      : this.setState({ johto: true })
  }

  handleHoennClicked = () => {
    this.state.hoenn
      ? this.setState({ hoenn: false })
      : this.setState({ hoenn: true })
  }

  handleSinnohClicked = () => {
    this.state.sinnoh
      ? this.setState({ sinnoh: false })
      : this.setState({ sinnoh: true })
  }

  handleUnovaClicked = () => {
    this.state.unova
      ? this.setState({ unova: false })
      : this.setState({ unova: true })
  }

  handleKalosClicked = () => {
    this.state.kalos
      ? this.setState({ kalos: false })
      : this.setState({ kalos: true })
  }

  render() {
    return (
      <div className="genFilter">
        <div id="kanto">
          <img
            src="/images/generations/kanto.png"
            alt="kanto"
            className="genButton"
            onClick={this.handleKantoClicked}
          />
          <img
            src="/images/generations/tick.png"
            alt="kantoTick"
            id="tick"
            style={this.state.kanto === true ? null : { display: 'none' }}
          />
        </div>
        <div id="johto">
          <img
            src="/images/generations/johto.png"
            alt="johto"
            className="genButton"
            onClick={this.handleJohtoClicked}
          />
          <img
            src="/images/generations/tick.png"
            alt="johtoTick"
            id="tick"
            style={this.state.johto === true ? null : { display: 'none' }}
          />
        </div>
        <div id="hoenn">
          <img
            src="/images/generations/hoenn.png"
            alt="hoenn"
            className="genButton"
            onClick={this.handleHoennClicked}
          />
          <img
            src="/images/generations/tick.png"
            alt="hoennTick"
            id="tick"
            style={this.state.hoenn === true ? null : { display: 'none' }}
          />
        </div>
        <div id="sinnoh">
          <img
            src="/images/generations/sinnoh.png"
            alt="sinnoh"
            className="genButton"
            onClick={this.handleSinnohClicked}
          />
          <img
            src="/images/generations/tick.png"
            alt="sinnohTick"
            id="tick"
            style={this.state.sinnoh === true ? null : { display: 'none' }}
          />
        </div>
        <div id="unova">
          <img
            src="/images/generations/unova.png"
            alt="unova"
            className="genButton"
            onClick={this.handleUnovaClicked}
          />
          <img
            src="/images/generations/tick.png"
            alt="unovaTick"
            id="tick"
            style={this.state.unova === true ? null : { display: 'none' }}
          />
        </div>
        <div id="kalos">
          <img
            src="/images/generations/kalos.png"
            alt="kalos"
            className="genButton"
            onClick={this.handleKalosClicked}
          />
          <img
            src="/images/generations/tick.png"
            alt="kalosTick"
            id="tick"
            style={this.state.kalos === true ? null : { display: 'none' }}
          />
        </div>
        <button id="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerationFilter)
