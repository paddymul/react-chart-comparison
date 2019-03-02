import React, { Component } from 'react';
import logo from './logo.svg';
import FoppingList from './components/first_component';
import Board from './components/board_component';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
            <h1>Paddy</h1>
            <FoppingList name="Mark" />
            <Board />
      </div>
    );
  }
}

export default App;
