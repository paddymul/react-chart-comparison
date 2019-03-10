import React from 'react';
import { connect } from 'react-redux';
import {hcPlotTypes} from "../reducers";
//import Line from "react-chartjs";

/*
const options = {
    title: {
        text: 'My chart'},
    series: [
        { data: [1, 2, 3]},
        { data: [10, 20, 30], type: 'scatter'},
        { data: [[50, 10], [70, 20], [90, 30]],
          type: 'scatter'},]};
*/

const hcDefaults = {
};


/*
var MyComponent = React.createClass({
    render: function() {
        return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
    }
});
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
<HighchartsReact
highcharts={Highcharts}
options={hcOptions}  />


<Line />
*/


const _ChartJSTranslator = ({ hcOptions }) => {
    return (<div>

            </div>);};

const dataTransform = (dataObj) => {
    var retData = [];
    for(var i = 0; i < dataObj.x.length; i++){
        retData.push([dataObj.x[i], dataObj.y[i]]);}
    return retData;};

const _expandSeries =  (ser, state) => {
    // this combines the shorthand fields with their expanded versions
    // shorthand fields include d and pwTyp
    //
    // eventually this function will translate between different plotting library
    // conventions

    // I'm not sure if this function should be memoized to return the
    // same object for the same input so that unecessary re renderings
    // aren't triggered
    var ab = {...ser, ...hcPlotTypes[ser.pwTyp],
              data: dataTransform(state.data[ser.d])};
    return ab;};

const mapStateToProps = state => {
    var newSer = Object.values(state.series).map(ser => _expandSeries(ser, state));
    const obj = {
        hcOptions: {
            ...hcDefaults,
            title: 'foo',
            series: newSer}};
    return obj;};


export const ChartJSTranslator = connect(
    mapStateToProps, null)(_ChartJSTranslator);

