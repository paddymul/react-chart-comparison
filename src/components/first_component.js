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

class SeriesList extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     series:   [
        //         {type: 'scatter', x: [1, 2, 3], y: [12, 6, 9]},
        //         {type: 'bar', x: [1, 2, 3], y: [2, 5, 3], visible:false},
        //         {type: 'line', x: [1, 2, 3], y: [20, -5, 23]},]

        // };
    }

    render() {
        return(
                <table>
                <thead>
                <tr><th>type</th><th>visible</th></tr>
                </thead>
                <tbody>
                {this.createTable()}
            </tbody>
                </table>)}

    handleClick(i) {
        const series = this.props.series.slice();
        series[i].visible = ! series[i].visible;
        this.setState({series: series});
    }

    createTable = () => {
        let table = [];

        // Outer loop to create parent
        for (let i = 0; i < this.props.series.length; i++) {
            let children = []
            //Inner loop to create children
            var ser = this.props.series[i];
            children.push(<td>{ser.type}</td>)
            children.push(<td><button onClick={() => this.handleClick(i)}> toggle visibility</button> {ser.visible}</td>)
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)}
        return table}}

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

    render() {
        return (
                <div className="shopping-list">
                <SeriesList series={this.state.series}/>
                <button onClick={() => this.handleClick()}> turn off bar</button>
                <Plot data={this.state.series}
            layout={{width: 320, height: 240, title: 'A Fancy Plot'}}/>
                </div>
        );}}

// Example usage: <ShoppingList name="Mark" />
