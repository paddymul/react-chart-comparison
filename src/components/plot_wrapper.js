import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility } from '../actions';
import PlotProps from "../components/plot_props";
import {PlotlyTranslator} from "../components/plotly_translator";
import {HighchartsTranslator} from "../components/highcharts_translator";

//const ChartLibrary = "HighCharts";
const ChartLibrary = "Plotly";

const SwitchedPlotTranslator = ({chartLib}) => {
    if (ChartLibrary == "HighCharts") {
        return <HighchartsTranslator />;}
    else if (ChartLibrary == "Plotly") {
        return <PlotlyTranslator />;
    }
}

const _PlotWrapper = ({ seriesArr }) => {
    return (<div>
            <PlotProps />
            <SwitchedPlotTranslator />
            </div>);};


export default connect(null, null)(_PlotWrapper);
