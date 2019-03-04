import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import { toggleVisibility } from '../actions';
import PlotProps from "../components/plot_props";
import {data, plotTypes} from "../reducers";


const _PlotWrapper = ({ seriesArr }) => {
    return (<div>
                <PlotProps />
                <Plot data={seriesArr} />
            </div>);};

const _expandSeries =  ser => {
    // this combines the shorthand fields with their expanded versions
    // shorthand fields include d and pwTyp
    //
    // eventually this function will translate between different plotting library
    // conventions
    return {...ser, ...data[ser.d], ...plotTypes[ser.pwTyp]};};

const mapStateToProps = state => ({
    seriesArr: Object.values(state.series).map(_expandSeries),})

const mapDispatchToProps = dispatch => ({
  toggleVis: id => dispatch(toggleVisibility(id) )})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_PlotWrapper);

// import { toggleTodo } from '../actions'
// import { VisibilityFilters } from '../actions'
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.completed)
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)} }
//
// const mapStateToProps = state => ({
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })
//
// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

