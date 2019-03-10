// src/js/reducers/index.js
import { TOGGLE_SERIES_VIS, CHART_LIB_CHANGE,
         CHANGE_SERIES_NAME,
         ADD_DATA, ADD_TO_SERIES
       } from "../actions/action-types";
import {objMap} from "../utils";


import { ONE_DAY, JAN_1_2017,
         TimeseriesGenX, RandSinY } from "../reducers/data_gen";

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
    chartLibrary: "HighCharts",
    //chartLibrary: "Plotly",
    data : [

        {x: [1, 2, 3], y: [12,  6,  9], dName:'0', description:'3 points 0',
         tags: ['simple-x', '<10 points']},
        {x: [1, 2, 3], y: [2,   5,  3], dName:'1', description:'3 points 1',
          tags: ['simple-x', '<10 points']},
        {x: [1, 2, 3], y: [20, -5, 23], dName:'2', description:'3 points 2',
         tags: ['simple-x', '<10 points']},
        {x: TimeseriesGenX({n:20, start:JAN_1_2017, periodicity:ONE_DAY}),
         y: RandSinY({n:20, start:50, sinAmp:7, randAmp:3}),
          dName:'4', description:'200 sin timeseries',
          tags: ['timeseries-x', '<500 points']},

    ],
    series:   {
        0 : {id:0, d:3, pwTyp: 'scatter', visible:false,  name:"foo", color:"orange",
             timeseries:true},



        1 : {id:1, d:1, pwTyp: 'line',    visible:false, name:'bar'  },
        2 : {id:2, d:2, pwTyp: 'line',    visible:true,  name:'baz'  },
        /*
        3 : {id:3, d:1, pwTyp: 'scatter', visible:true,  name:'boff'  }

        0 : {id:0, d:0, pwTyp: 'scatter', visible:true,  name:"foo", color:"orange"   },
        1 : {id:1, d:1, pwTyp: 'line',    visible:false, name:'bar'  },
        2 : {id:2, d:2, pwTyp: 'line',    visible:true,  name:'baz'  },
        3 : {id:3, d:1, pwTyp: 'scatter', visible:true,  name:'boff'  }
        */
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
        const newDataEl = {'x':x, 'y':y, 'dName': oldDLen.toString() + "_r",
                           'tags': [action.newLen.toString() + "_r"]
                          };
        // const serKeyInt = Object.keys(state.series).length;
        // const serKey = serKeyInt.toString();
        // const newSerRow = {
        //     id:serKeyInt, d:oldDLen, pwTyp: 'scatter',  visible:true,
        //     name:'random' + oldDLen.toString()};
        // var serObj = {};
        // serObj[serKey] = newSerRow;
        // const newFullSeries = Object.assign({}, state.series, serObj);

        const newData = [].concat(state.data, newDataEl);
        const dataUpdateObj = {data: newData};
        const retVal2 = Object.assign({}, state, dataUpdateObj);
        return retVal2;
    }
    if (action.type === ADD_TO_SERIES) {
        var dataID = null;
        for(var j=0; j < state.data.length; j++){
            if(action.dName === state.data[j].dName){
                dataID = j;
            }
        }
        
        const serKeyInt = Object.keys(state.series).length;
        const serKey = serKeyInt.toString();
        const newSerRow = {
            id:serKeyInt, d:dataID, pwTyp: 'scatter',  visible:true,
            name:'random' + dataID.toString()};
        var serObj2 = {};
        serObj2[serKey] = newSerRow;
        const newFullSeries = Object.assign({}, state.series, serObj2);
        const retVal = Object.assign({}, state, {'series': newFullSeries});
        return retVal;
    }
    return state;
};



export default rootReducer;
