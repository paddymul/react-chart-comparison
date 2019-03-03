import React, { Component } from 'react';
import './App.css';
import List from "./components/list.js";
import Form from "./components/form.js";



import PlotWrapper from "./components/plot_wrapper";
class App extends Component {
  render() {
    return (
      <div className="App">
            <h1>Paddy</h1>
            
            <PlotWrapper />
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
