import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import { toggleVisibility } from '../actions';
import PlotProps from "../components/plot_props";
import {plotTypes} from "../reducers";


const _PlotWrapper = ({ seriesArr }) => {
    return (<div>
                <PlotProps />
                <Plot data={seriesArr} />
            </div>);};

const _expandSeries =  (ser, state) => {
    // this combines the shorthand fields with their expanded versions
    // shorthand fields include d and pwTyp
    //
    // eventually this function will translate between different plotting library
    // conventions

    // I'm not sure if this function should be memoized to return the
    // same object for the same input so that unecessary re renderings
    // aren't triggered
    return {...ser, ...state.data[ser.d], ...plotTypes[ser.pwTyp]};};

const mapStateToProps = state => ({
    seriesArr: Object.values(state.series).map(ser => _expandSeries(ser, state)),})

const mapDispatchToProps = dispatch => ({
  toggleVis: id => dispatch(toggleVisibility(id) )})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_PlotWrapper);
