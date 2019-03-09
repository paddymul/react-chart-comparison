import React from 'react';
import { connect } from 'react-redux';
import { chartLibChange } from '../actions';
import PlotProps from "../components/plot_props";
import DataBrowser from "../components/data_browser";
import {PlotlyTranslator} from "../components/plotly_translator";
import {HighchartsTranslator} from "../components/highcharts_translator";
import {ChartJSTranslator} from "../components/chartjs_translator";
import {SimpleSelect} from "../components/simple_select.js";


const chartLibs = [
    { label: "Plotly", value: "Plotly" },
    { label: "HighCharts", value: "HighCharts" },
//    { label: "ChartJS", value: "ChartJS" },
];

const SwitchedPlotTranslator = ({chartLib}) => {
    if (chartLib === "HighCharts") {
        return <HighchartsTranslator />;}
    else if (chartLib === "Plotly") {
        return <PlotlyTranslator />;}
    else if (chartLib === "ChartJS") {
        return <ChartJSTranslator />;}
}

const _PlotWrapper = ({ seriesArr, chartLib, chartChange }) => {
    return (<div>
            <SimpleSelect onChange={ chartChange } defaultV={ chartLib }
                          options={ chartLibs } />
            <DataBrowser />
            <PlotProps />
            <SwitchedPlotTranslator chartLib={chartLib} />
            </div>);};

const mapStateToProps = state => ({
    chartLib: state.chartLibrary});

const mapDispatchToProps = dispatch => ({
    chartChange: ev => dispatch(chartLibChange(ev))});

export default connect(mapStateToProps, mapDispatchToProps)(_PlotWrapper);
