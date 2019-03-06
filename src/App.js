import React, { Component } from 'react';
import './App.css';
import List from "./components/list.js";
import Form from "./components/form.js";



import PlotWrapper from "./components/plot_wrapper";
class App extends Component {
  render() {
    return (
      <div className="App">
            <PlotWrapper />
      </div>
    );
  }
}

export default App;
