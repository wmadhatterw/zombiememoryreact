import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '../Bootstrap/Container';
import Row from '../Bootstrap/Row';
import Col from '../Bootstrap/Col';
import ImgCard from '../ImgCard/ImgCard'
import cards from '../../images.json'

class App extends Component {
  state = {
    cards: cards,
    guessedCards: [],
    score: 0,
    topScore: 0
  }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Clicky Memory Game</h1>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
          <p>Score: {this.state.score}    Top Score: {this.state.topScore}</p>

        </header>
        <Container>
          <Row>
            {this.state.cards.map(card => (
              <Col size="md-3">
                <ImgCard
                  image={card.image}
                  name={card.name}
                  id={card.id}
                  key={card.id}
                  handleClick={this.handleClick}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
