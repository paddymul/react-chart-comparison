import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility, changeSeriesName } from '../actions';

const SeriesRow = ({ ser, onClick, nameChange }) => {
    return (
    <tr>
        <td>
            <input type="text" value={ser.name} onChange={nameChange} />
        </td>
        <td> {ser.type}</td>
        <td><button onClick={onClick}> {ser.visible ? 'visibile' : 'hidden'}</button></td>
    </tr>)}

export const SeriesTable = ({ series, toggleVis, nameChg }) => {
    return (
                <table>
                    <thead>
                        <tr><th>name</th><th>type</th><th>visible</th></tr>
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
    )}

const mapStateToProps = state => ({
  series: state.series})

const mapDispatchToProps = dispatch => ({
    toggleVis: id => dispatch(toggleVisibility(id)),
    nameChg: id => dispatch(changeSeriesName(id))})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesTable);
