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
            <table>
                <thead>
                    <tr><th>Name</th><th>Type</th><th>Visible</th><th> dName</th></tr>
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
