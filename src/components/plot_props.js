import React from 'react';
import { connect } from 'react-redux';

import { ONE_K, ONE_M } from "../utils";
import { toggleVisibility, changeSeriesName, addDataAction
       } from '../actions';



const SeriesRow = ({ ser, onClick, nameChange }) => {
    return (
    <tr>
        <td>
            <input type="text" value={ser.name} onChange={nameChange} />
        </td>
        <td> {ser.type}</td>
            <td><button onClick={onClick}> {ser.visible ? 'visibile' : 'hidden'}</button></td>
            <td> {ser.d} </td>
    </tr>)}

export const SeriesTable = ({ series, toggleVis, nameChg, addData }) => {
    return (
        <div>
            <div>
            <h3> Add Data </h3>
            <button onClick={() => addData(100)}         > 100 Series </button>
            <button onClick={() => addData(ONE_K)}       > 1k Series </button>
            <button onClick={() => addData(10 * ONE_K)}  > 10k Series </button>
            <button onClick={() => addData(100 * ONE_K)} > 100k Series </button>
            <button onClick={() => addData(ONE_M)}       > 1M Series </button>
            </div>
                <table>
                    <thead>
                        <tr><th>name</th><th>type</th><th>visible</th><th> dName</th></tr>
                   </thead>
                <tbody>
                    {Object.values(series).map(ser => (
                        <SeriesRow
                            key={ser.id} ser={ser}
                        onClick={() => toggleVis(ser.id)}
                        nameChange={(ev) => nameChg({id:ser.id, ev})}
                            />))}
                </tbody>
            </table>
            </div>
    )};

const mapStateToProps = state => ({
  series: state.series})

const mapDispatchToProps = dispatch => ({
    toggleVis: id => dispatch(toggleVisibility(id)),
    nameChg: id => dispatch(changeSeriesName(id)),
    addData: ev => dispatch(addDataAction(ev))});
                                       

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesTable);
