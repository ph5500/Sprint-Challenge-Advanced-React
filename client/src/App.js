import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './components/Players/player-list';
// import { listenerCount } from 'cluster';
import Header from './components/Players/header';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response);
        this.setState({ players: response.data })
      })
      .catch(error => {
        console.log("The data waas not returned", error)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Soccer Players</h1>
        {/* Header card will go here */}
        <Header data-testid='header' />
        {/* playerList card will go here */}
        <PlayerList players={this.state.players} />
      </div>
    )
  }
}


export default App;
