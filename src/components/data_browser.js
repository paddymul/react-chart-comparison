import React from 'react';
import { connect } from 'react-redux';

import { ONE_K, ONE_M } from "../utils";
import { addToSeriesAction, addDataAction
       } from '../actions';

const DataRow = ({ meta, addToSeries }) => {
    return (
    <tr>
        <td>
            { meta.dName }
        </td>
            <td> { meta.description }</td>
            <td> { meta.tags.map(tag => (<button key={meta.dName + tag} > { tag } </button>)  ) }  </td>
            <td><button onClick={ addToSeries }> Add </button></td>
            </tr>); };

export const _DataBrowser = ({ dataMetas, addToSeriesOuter, addData }) => {
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
                        <tr><th>Name</th><th>Description</th><th>Tags</th><th>Add to plot</th></tr>
                   </thead>
                <tbody>
            {dataMetas.map(meta => (
                    <DataRow
                key={meta.dName} meta={meta}
                addToSeries={() => addToSeriesOuter( meta.dName)}
                    />) ) }
                </tbody>
            </table>
            </div>
    ); };

const mapStateToProps = state => ({
  dataMetas: state.data})

const mapDispatchToProps = dispatch => ({
    addToSeriesOuter: dName => dispatch(addToSeriesAction(dName)),
    addData: ev => dispatch(addDataAction(ev))});
                                       

const DataBrowser = connect(
  mapStateToProps,
  mapDispatchToProps
)(_DataBrowser);
        export default DataBrowser;

        
