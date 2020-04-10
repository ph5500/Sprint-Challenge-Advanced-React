import React from 'react';
import axios from 'axios';
import './App.css';
// import PlayerList from './components/player-list';
// import Header from './components/header';

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response);
        thissetState({ players: response.data })
      })
      .catch(error => {
        console.log("The data waas not returned", error)
      })
  }


  return() {
    <div>
      words
      {/* Header card will go here */}
      {/* playerList card will go here */}


    </div>

  }
}

export default App;
