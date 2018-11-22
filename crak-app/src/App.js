import React, { Component } from 'react';
import './App.css';
import playerData from './playerData.json'

console.log('pd', playerData)

const styles = {
  elixirContainer: { display: 'flex', width: 'calc(100% - 12px)', margin: '20px 6px', height: '3vw', maxHeight: 30, background: 'lightgray' },
  elixir: { width: `calc((100% / 10) - 2px`, height: '100%', borderRadius: 2, borderLeft: '2px solid gray' },
  cardContainer: { flex: 1, position: 'relative' },
  cardsInHand: { display: 'flex', background: `linear-gradient(to bottom, rgba(0,255,0,0.6), rgba(0,0,0,0.6))`, marginBottom: 22 },
  cardsInQueue: { display: 'flex' },
  elixirCost: { position: 'absolute', top: 0, left: 0, borderRadius: '50%', background: 'linear-gradient(to bottom, red, black', height: '20%', width: '22%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, border: '2px solid black' },
  unverifiedCard: { opacity: 0.3, backgroundColor: 'white', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10vw', color: 'black' },
  playCardButton: { padding: '1%', backgroundColor: 'gray', color: 'white', width: '20%' }
}

export default class App extends Component {
  state={
    playerTag: '',
    opponentElixirCount: 0,
    myElixirCount: 0,
    cardsInHand: playerData.currentDeck.slice(0, 4),
    cardsInQueue: playerData.currentDeck.slice(4),
  }

  componentDidMount() {
    this.elixirInterval = setInterval(() => {
      if (this.state.opponentElixirCount < 10) {
        this.setState(({ opponentElixirCount }) => ({ opponentElixirCount: opponentElixirCount + 1 }))
      }

      if (this.state.myElixirCount < 10) {
        this.setState(({ myElixirCount }) => ({ myElixirCount: myElixirCount + 1 }))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.elixirInterval)
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

  handleOpponentCardPlay = card => {
    if (card.elixirCost > this.state.opponentElixirCount) return console.log('Not enough elixir!')

    const newCardsInHand = [...this.state.cardsInHand]
    const newCardsInQueue = [...this.state.cardsInQueue]
    const prevCardIndex = newCardsInHand.findIndex(cardInHand => cardInHand.id === card.id)
    if (prevCardIndex === -1) return console.log('Player deck assumptions wrong!')

    newCardsInQueue.push({ ...card, verified: true })
    const newCardInHand = newCardsInQueue.splice(0, 1)[0]
    newCardsInHand.splice(prevCardIndex, 1, newCardInHand)

    this.setState(({ opponentElixirCount }) => ({
      cardsInHand: newCardsInHand,
      cardsInQueue: newCardsInQueue,
      opponentElixirCount: opponentElixirCount - card.elixirCost,
    }))
  }

  renderOpponentsElixirBar = () => [...Array(this.state.opponentElixirCount)].map((count, index) => (
    <div
      key={index}
      style={{
        ...styles.elixir,
        background: `linear-gradient(to bottom, rgba(255,0,0,0.6), red)`
      }}
    />
  ))

  renderMyElixirBar = () => [...Array(this.state.myElixirCount)].map((count, index) => (
    <div
      key={index}
      style={{
        ...styles.elixir,
        background: `linear-gradient(to bottom, rgba(0,0,255,0.6), blue)`
      }}
    />
  ))

  render() { 
    return (
      <div className="App" style={{ maxWidth: 800, margin: '0 auto', padding: 22 }}>
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

        <div id="cardSection">
          <div id="cardsInHand" style={styles.cardsInHand}>
            {this.state.cardsInHand.map((card, index) => {
              const verified = card.verified
              return (
                <div style={styles.cardContainer} key={index}>
                  <img
                    alt={card.name}
                    width="100%"
                    height="100%"
                    src={card.iconUrls.medium}
                  />
                  <div style={styles.elixirCost}>{card.elixirCost}</div>
                  {!verified && <div style={styles.unverifiedCard}>?</div>}
                </div>
              )
            })}
          </div>
          <div id="cardsInQueue" style={styles.cardsInQueue}>
            {this.state.cardsInQueue.map((card, index) => {
              const verified = card.verified
              return (
                <div style={styles.cardContainer} key={index}>
                  <img
                    alt={card.name}
                    width="100%"
                    height="100%"
                    src={card.iconUrls.medium}
                  />
                  <div style={styles.elixirCost}>{card.elixirCost}</div>
                  {!verified && <div style={styles.unverifiedCard}>?</div>}
                </div>
              )
            })}
          </div>
        </div>
        <div style={styles.elixirContainer}>
          {this.renderOpponentsElixirBar()}
        </div>
        <div style={styles.elixirContainer}>
          {this.renderMyElixirBar()}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {this.state.cardsInHand.map((cardInHand, index) => (
            <button
              key={index}
              style={styles.playCardButton}
              onClick={() => this.handleOpponentCardPlay(cardInHand)}
            >
              {`Play ${cardInHand.name}`}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
