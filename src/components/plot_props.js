import React from 'react';
//import Plot from 'react-plotly.js';

import { connect } from 'react-redux';
import { toggleVisibility } from '../actions';


/*
SeriesRow.propTypes = {
    onClick: PropTypes.func.isRequired,
    ser: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
}
*/

// const Todo = ({ onClick, completed, text }) => (
//         <li
//     onClick={onClick}
//     style={{
//         textDecoration: completed ? 'line-through' : 'none'
//     }}
//         >
//         {text}
//     </li>)


const SeriesRow = ({ ser, onClick }) => {
    //console.log(ser);
    return (
    <tr>
        <td> {ser.type}</td>
        <td><button onClick={onClick}> {ser.visible ? 'visibile' : 'hidden'}</button></td>
    </tr>)}

// const TodoList = ({ todos, toggleTodo }) => (
//         <ul>
//         {todos.map(todo => (
//                 <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
//         ))}
//     </ul>

export const SeriesTable = ({ series, toggleVis }) => {
    //console.log(series);
    console.log(Object.values(series)[0]);
    return (<table>
        <thead>
            <tr><th>type</th><th>visible</th></tr>
        </thead>
        <tbody>
            {Object.values(series).map(ser => (
                <SeriesRow key={ser.id} ser={ser} onClick={() => toggleVis(ser.id)} />
            ))}
        </tbody>
        </table>)}


// handleClick(i) {
//     const series = this.props.series.slice();
//     series[i].visible = ! series[i].visible;
//     this.setState({series: series});

// }


/*
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
*/

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

const pickSeries = (state) => {
    return state.series
}

// const mapStateToProps = state => ({
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })
const mapStateToProps = state => ({
  series: pickSeries(state)
})


// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

const mapDispatchToProps = dispatch => ({
  toggleVis: id => dispatch(toggleVisibility(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesTable);

