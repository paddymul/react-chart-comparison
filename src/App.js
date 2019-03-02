import React, { Component } from 'react';
import logo from './logo.svg';

import FoppingList from './components/first_component';
import Board from './components/board_component';

import './App.css';

import store from "./store/index";
import { addArticle } from "./actions/index";

import List from "./components/list.js";
import Form from "./components/form.js";

class App extends Component {
  render() {
    return (
      <div className="App">
            <h1>Paddy</h1>
            <FoppingList name="Mark" />
          <div>
              <h2>Articles</h2>
              <List />
              <h2>Add a new article</h2>
              <Form />
          </div>
      </div>
    );
  }
}

export default App;
