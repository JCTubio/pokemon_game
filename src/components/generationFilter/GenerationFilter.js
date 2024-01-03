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

  handleKantoClicked = async () => {
    this.state.kanto
      ? await this.setState({ kanto: false })
      : await this.setState({ kanto: true })
    this.handleSubmit()
  }

  handleJohtoClicked = async () => {
    this.state.johto
      ? await this.setState({ johto: false })
      : await this.setState({ johto: true })
    this.handleSubmit()
  }

  handleHoennClicked = async () => {
    this.state.hoenn
      ? await this.setState({ hoenn: false })
      : await this.setState({ hoenn: true })
    this.handleSubmit()
  }

  handleSinnohClicked = async () => {
    this.state.sinnoh
      ? await this.setState({ sinnoh: false })
      : await this.setState({ sinnoh: true })
    this.handleSubmit()
  }

  handleUnovaClicked = async () => {
    this.state.unova
      ? await this.setState({ unova: false })
      : await this.setState({ unova: true })
    this.handleSubmit()
  }

  handleKalosClicked = async () => {
    this.state.kalos
      ? await this.setState({ kalos: false })
      : await this.setState({ kalos: true })
    this.handleSubmit()
  }

  render() {
    return (
      <div className="genFilter">
        <h2 className='genSelectTitle'>GEN SELECTOR</h2>
        <div id="kanto" className="genButton" onClick={this.handleKantoClicked}>
          <img
            src="/images/generations/tick.png"
            alt="kantoTick"
            id="tick"
            style={this.state.kanto === true ? null : { display: 'none' }}
          />
          <h4>
            {'RED&\nBLUE'}
          </h4>
        </div>
        <div id="johto" className="genButton" onClick={this.handleJohtoClicked}>
          <img
            src="/images/generations/tick.png"
            alt="johtoTick"
            id="tick"
            style={this.state.johto === true ? null : { display: 'none' }}
          />
          <h4>
            {'GOLD&\nSILVER'}
          </h4>
        </div>
        <div id="hoenn" className="genButton" onClick={this.handleHoennClicked}>
          <img
            src="/images/generations/tick.png"
            alt="hoennTick"
            id="tick"
            style={this.state.hoenn === true ? null : { display: 'none' }}
          />
          <h4>
            {'RUBY&\nSAPPHIRE'}
          </h4>
        </div>
        <div id="sinnoh" className="genButton" onClick={this.handleSinnohClicked}>
          <img
            src="/images/generations/tick.png"
            alt="sinnohTick"
            id="tick"
            style={this.state.sinnoh === true ? null : { display: 'none' }}
          />
          <h4>
            {'PEARL&\nDIAMOND'}
          </h4>
        </div>
        <div id="unova" className="genButton" onClick={this.handleUnovaClicked}>
          <img
            src="/images/generations/tick.png"
            alt="unovaTick"
            id="tick"
            style={this.state.unova === true ? null : { display: 'none' }}
          />
          <h4>
            {'BLACK&\nWHITE'}
          </h4>
        </div>
        <div id="kalos" className="genButton" onClick={this.handleKalosClicked}>
          <img
            src="/images/generations/tick.png"
            alt="kalosTick"
            id="tick"
            style={this.state.kalos === true ? null : { display: 'none' }}
          />
          <h4>
            {'X&Y'}
          </h4>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerationFilter)
