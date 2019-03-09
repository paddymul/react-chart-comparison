// src/js/reducers/index.js
import { TOGGLE_SERIES_VIS,
         CHANGE_SERIES_NAME, ADD_DATA, CHART_LIB_CHANGE
       } from "../actions/action-types";
import {objMap} from "../utils";

export const plotTypes = {
    'scatter': {'type': 'scatter', 'mode':'markers'},
    'line': {'type': 'line', 'mode':null},
    'bar': {'type': 'bar', 'mode':null}
};

export const hcPlotTypes = {
    'scatter': {'type': 'scatter' },
    'line': {'type': 'line'},
    'bar': {'type': 'bar'}
};




const initialState = {
    articles: [],
    //chartLibrary: "HighCharts",
    chartLibrary: "Plotly",
    data : [
        {x: [1, 2, 3], y: [12,  6,  9], dName:'0'},
        {x: [1, 2, 3], y: [2,   5,  3], dName:'1'},
        {x: [1, 2, 3], y: [20, -5, 23], dName:'2'},
    ],

    series:   {
        0 : {id:0, d:0, pwTyp: 'scatter', visible:true,  name:"foo", color:"orange"   },
        1 : {id:1, d:1, pwTyp: 'line',    visible:false, name:'bar'  },
        2 : {id:2, d:2, pwTyp: 'line',    visible:true,  name:'baz'  },
        3 : {id:3, d:1, pwTyp: 'scatter', visible:true,  name:'boff'  }
}
};


function rootReducer(state = initialState, action) {
    if (action.type === TOGGLE_SERIES_VIS) {
        var oldSeries = state.series;
        var newSeries = objMap(
            oldSeries,
            (id, ser) => Number(id) === action.id ? {...ser, visible: !ser.visible} : ser);
        const retVal = Object.assign({}, state, {'series': newSeries});
        return retVal;
    }
    if (action.type === CHANGE_SERIES_NAME) {
        console.log(action);
        var oldSeries2 = state.series;
        var newSeries2 = objMap(
            oldSeries2,
            (id, ser) => Number(id) === action.id ? {...ser, name: action.name} : ser);
        const retVal = Object.assign({}, state, {'series': newSeries2});
        return retVal;}
    if (action.type === CHART_LIB_CHANGE) {
        const retVal = Object.assign({}, state, {'chartLibrary': action.new_lib});
        return retVal;}
    if (action.type === ADD_DATA) {
        var x = [], y = [];
        for(var i=0; i < action.newLen; i++){
            x.push(i+1);
            y.push(Math.random()*100);
        }
        const oldDLen = state.data.length;
        const newDataEl = {'x':x, 'y':y, 'dName': oldDLen.toString() + "_r"};
        const serKeyInt = Object.keys(state.series).length;
        const serKey = serKeyInt.toString();
        const newSerRow = {
            id:serKeyInt, d:oldDLen, pwTyp: 'scatter',  visible:true,
            name:'random' + oldDLen.toString()};
        var serObj = {};
        serObj[serKey] = newSerRow;
        const newFullSeries = Object.assign({}, state.series, serObj);
        const newData = [].concat(state.data, newDataEl);
        const retVal = Object.assign({}, state, {
            'series': newFullSeries, 'data': newData });
        return retVal;
        }
    return state;
};



export default rootReducer;
