import React from 'react';
import { connect } from 'react-redux';
import {hcPlotTypes} from "../reducers";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

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
boost: {
    useGPUTranslations: true,
    usePreAllocated: true
}
     
};


const _HighchartsTranslator = ({ hcOptions }) => {
    return (<div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={hcOptions}  />
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
              data: dataTransform(state.data[ser.d]),
             };
    return ab;};

const mapStateToProps = state => {
    const newSer = Object.values(state.series).map(ser => _expandSeries(ser, state));
    var filteredSer = newSer;
    if (state.serFilter !== "") {
        filteredSer = newSer.filter(x => state.data[x.d].tags.includes(state.serFilter));
    }
    var xAxisObj = {type:'linear'};
    const hasTS = filteredSer.some((s) => s.visible && s.timeseries);
    if (hasTS) {
        xAxisObj =  { type: 'datetime' };}
    const obj = {
        hcOptions: {
            ...hcDefaults,
            title: 'foo',
            series: filteredSer,
            xAxis: xAxisObj}};
    return obj;};

export const HighchartsTranslator = connect(
    mapStateToProps, null)(_HighchartsTranslator);

