import React from 'react';
import Plot from 'react-plotly.js';


/*
  {
  x: [1, 2, 3],
  y: [12, 6, 9],
  type: 'scatter',
  mode: 'lines+markers',
  marker: {color: 'red'},
  },
  {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
  {type: 'line', x: [1, 2, 3], y: [20, -5, 23]},

  <Plot data={[{type: 'scatter', x: [1, 2, 3], y: [12, 6, 9]},
  {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
  {type: 'line', x: [1, 2, 3], y: [20, -5, 23]}]}
  layout={{width: 320, height: 240, title: 'A Fancy Plot'}}/>
  <Plot data={this.series}
  layout={{width: 320, height: 240, title: 'A Fancy Plot'}}/>
*/

/* eslint-disable react/prefer-stateless-function */
export default class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            series:   [
                {type: 'scatter', x: [1, 2, 3], y: [12, 6, 9]},
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3], visible:false},
                {type: 'line', x: [1, 2, 3], y: [20, -5, 23]},]

        };
    }
    handleClick(i) {
        const series = this.state.series.slice();
        series[1].visible = ! series[1].visible;
        this.setState({series: series});
    }

    render() {
        return (
                <div className="shopping-list">
                <button onClick={() => this.handleClick()}> turn off bar</button>
                <Plot data={this.state.series}
            layout={{width: 320, height: 240, title: 'A Fancy Plot'}}/>
                </div>
        );}}

// Example usage: <ShoppingList name="Mark" />
