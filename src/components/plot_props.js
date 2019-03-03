import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility } from '../actions';

const SeriesRow = ({ ser, onClick }) => {
    return (
    <tr>
        <td> {ser.type}</td>
        <td><button onClick={onClick}> {ser.visible ? 'visibile' : 'hidden'}</button></td>
    </tr>)}

export const SeriesTable = ({ series, toggleVis }) => {
    return (<table>
        <thead>
            <tr><th>type</th><th>visible</th></tr>
        </thead>
        <tbody>
            {Object.values(series).map(ser => (
                <SeriesRow key={ser.id} ser={ser} onClick={() => toggleVis(ser.id)} />))}
        </tbody>
        </table>)}

const mapStateToProps = state => ({
  series: state.series})

const mapDispatchToProps = dispatch => ({
  toggleVis: id => dispatch(toggleVisibility(id))})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesTable);

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

