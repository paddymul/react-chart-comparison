import React, { Component } from 'react';

//import FoppingList from './components/first_component';
//<FoppingList name="Mark" />
//import Board from './components/board_component';

import './App.css';

//import store from "./store/index";

import List from "./components/list.js";
import Form from "./components/form.js";


import PlotProps from "./components/plot_props";

class App extends Component {
  render() {
    return (
      <div className="App">
            <h1>Paddy</h1>
            
            <PlotProps />
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
