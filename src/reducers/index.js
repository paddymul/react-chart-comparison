// src/js/reducers/index.js
import { ADD_ARTICLE, MUTATE_SERIES_META, TOGGLE_SERIES_VIS,
         CHANGE_SERIES_NAME, ADD_DATA,
       } from "../actions/action-types";
import {objMap} from "../utils";

export const plotTypes = {
    'scatter': {'type': 'scatter', 'mode':'markers'},
    'line': {'type': 'line', 'mode':null},
    'bar': {'type': 'bar', 'mode':null}
};




const initialState = {
    articles: [],
    data : [
        {x: [1, 2, 3], y: [12,  6,  9], dName:'0'},
        {x: [1, 2, 3], y: [2,   5,  3], dName:'1'},
        {x: [1, 2, 3], y: [20, -5, 23], dName:'2'},
    ],

    series:   {
        0 : {id:0, d:0, pwTyp: 'scatter', visible:true,  name:"foo"   },
        1 : {id:1, d:1, pwTyp: 'bar',     visible:false, name: 'bar'},
        2 : {id:2, d:2, pwTyp: 'line',    visible:true,  name:'baz'},
        3 : {id:3, d:1, pwTyp: 'scatter',  visible:true,  name:'boff'}}
};


function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)});}
    if (action.type === TOGGLE_SERIES_VIS) {
        var oldSeries = state.series;
        var newSeries = objMap(
            oldSeries,
            (id, ser) => Number(id) === action.id ? {...ser, visible: !ser.visible} : ser);
        const retVal = Object.assign({}, state, {'series': newSeries});
        return retVal;
    }
    if (action.type === CHANGE_SERIES_NAME) {
        var oldSeries = state.series;
        var newSeries = objMap(
            oldSeries,
            (id, ser) => Number(id) === action.id ? {...ser, name: action.name} : ser);
        const retVal = Object.assign({}, state, {'series': newSeries});
        return retVal;}
    if (action.type === ADD_DATA) {
        var x = [], y = [];
        for(var i=0; i < action.newLen; i++){
            x.push(i+1);
            y.push(Math.random()*100);
        }
        const oldDLen = state.data.length;
        const newDataEl = {'x':x, 'y':y, 'dName': oldDLen.toString() + "_r"};
        const serKey = Object.keys(state.series).length.toString();
        const newSerRow = {
            id:serKey, d:oldDLen, pwTyp: 'scatter',  visible:true,
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
