import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import playerData from './playerData.json'

console.log('pd', playerData)
const styles = {
  elixerContainer: { display: 'flex', width: 'calc(100% - 12px)', margin: '20px 6px', height: 10, background: 'lightgray' },
  elixer: { width: `calc(100% / 10`, height: 10, borderRadius: 10 }
}

export default class App extends Component {
  state={
    playerTag: '',
    opponentElixerCount: 0,
    myElixerCount: 0,
  }

  componentDidMount() {
    this.elixerInterval = setInterval(() => {
      if (this.state.opponentElixerCount < 10) {
        this.setState(({ opponentElixerCount }) => ({ opponentElixerCount: opponentElixerCount + 1 }))
      }

      if (this.state.myElixerCount < 10) {
        this.setState(({ myElixerCount }) => ({ myElixerCount: myElixerCount + 1 }))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.elixerInterval)
  }

  handleInputChange = e => {
    const playerTag = e.target.value
    this.setState(() => ({ playerTag }))
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmit(this.state.playerTag)
    }
  }
  
  handleSubmit = playerTag => console.log(playerTag)

  renderOpponentsElixerBar = () => [...Array(this.state.opponentElixerCount)].map((count, index) => (
    <div
      key={index}
      style={{
        ...styles.elixer,
        background: `linear-gradient(to right, rgba(255,0,0,0.6), red)`
      }}
    />
  ))

  renderMyElixerBar = () => [...Array(this.state.myElixerCount)].map((count, index) => (
    <div
      key={index}
      style={{
        ...styles.elixer,
        background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`
      }}
    />
  ))

  render() { 
    return (
      <div className="App" style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1>Player Data</h1>
        <div style={{ marginBottom: 22 }}>
          <input
            type="text"
            placeholder="Enter Player Tag (#XXXXXXXX)"
            style={{ width: 200 }}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
          <button type="button" onClick={() => this.handleSubmit(this.state.playerTag)}>Find Player</button>
        </div>

        <div id="Card Section">
          <div style={{ display: 'flex' }}>
            {playerData.currentDeck.map((card, index) => {
              if (index <= 3) {
                return (
                  <div style={{ flex: 1 }} key={index}>
                    <img
                      alt={card.name}
                      width="100%"
                      height="100%"
                      src={card.iconUrls.medium}
                    />
                  </div>
                )
              }
            })}
          </div>
          <div style={{ display: 'flex' }}>
          {playerData.currentDeck.map((card, index) => {
              if (index > 3) {
                return (
                  <div style={{ flex: 1 }} key={index}>
                    <img
                      alt={card.name}
                      width="100%"
                      height="100%"
                      src={card.iconUrls.medium}
                    />
                  </div>
                )
              }
            })}
          </div>
        </div>
        <div style={styles.elixerContainer}>
          {this.renderOpponentsElixerBar()}
        </div>
        <div style={styles.elixerContainer}>
          {this.renderMyElixerBar()}
        </div>
      </div>
    );
  }
}
