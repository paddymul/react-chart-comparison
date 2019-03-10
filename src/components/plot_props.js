import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility, changeSeriesName, addDataAction,
         serTagChange
       } from '../actions';
import {SimpleSelect} from "../components/simple_select.js";

const SeriesRow = ({ ser, onClick, nameChange }) => {
    return (
    <tr>
        <td>
            <input type="text" value={ser.name} onChange={nameChange} />
        </td>
        <td> {ser.type}</td>
            <td><button onClick={onClick}> {ser.visible ? 'visibile' : 'hidden'}</button></td>
            <td> {ser.d} </td>
            </tr>);};

export const SeriesTable = (
    { series, toggleVis, nameChg, addData,
      serTagChg, tagOptions}) => {
    return (
        <div>
            <SimpleSelect onChange={ serTagChg } defaultV={ "" }
        options={ tagOptions } />
            
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
    );};


// const c = 'a';
// Object.assign({}, {['a']: 8}, {['b']: 2}, {b: 20}, {[c]: 80});

const mapStateToProps = state => {
    const flatTags = state.data.map(x => x.tags).flat();
    const uTags = [...new Set(flatTags)];
    const tagObjs = [
        { label: "", value: ""},
        ...uTags.map(x => ({label: x, value: x }))];
    return( {
        tagOptions: tagObjs,
        series: state.series});
};

const mapDispatchToProps = dispatch => ({
    toggleVis: id => dispatch(toggleVisibility(id)),
    nameChg: id => dispatch(changeSeriesName(id)),
    addData: ev => dispatch(addDataAction(ev)),
    serTagChg: ev => dispatch(serTagChange(ev))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesTable);
