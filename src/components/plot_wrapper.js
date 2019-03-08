import React from 'react';
import { connect } from 'react-redux';
import { chartLibChange } from '../actions';
import PlotProps from "../components/plot_props";
import {PlotlyTranslator} from "../components/plotly_translator";
import {HighchartsTranslator} from "../components/highcharts_translator";
import {ChartJSTranslator} from "../components/chartjs_translator";
import Select from 'react-select';


const chartLibs = [
    { label: "Plotly", value: "Plotly" },
    { label: "HighCharts", value: "HighCharts" },
    { label: "ChartJS", value: "ChartJS" },
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
            <h2> {chartLib } </h2>
            <Select options={ chartLibs } onChange={ chartChange } />
            <PlotProps />
            <SwitchedPlotTranslator chartLib={chartLib} />
            </div>);};

const mapStateToProps = state => ({
    chartLib: state.chartLibrary});

const mapDispatchToProps = dispatch => ({
    chartChange: ev => dispatch(chartLibChange(ev))});

export default connect(mapStateToProps, mapDispatchToProps)(_PlotWrapper);
