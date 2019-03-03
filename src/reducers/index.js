// src/js/reducers/index.js
import { ADD_ARTICLE, MUTATE_SERIES_META, TOGGLE_SERIES_VIS
       } from "../actions/action-types";

const data = [
    {x: [1, 2, 3], y: [12,  6,  9]},
    {x: [1, 2, 3], y: [2,   5,  3]},
    {x: [1, 2, 3], y: [20, -5, 23]},
];

const initialState = {
    articles: [],
    series:   {
        0 : {id:0, ...data[0], type: 'table', visible:true, mode: 'markers',
             name:"foo"   },
        1 : {id:1, ...data[1], type: 'bar',     visible:false, name: 'bar'},
        2 : {id:2, ...data[2], type: 'line',    visible:true,  name:'baz'},
        3 : {id:3, ...data[0], type: 'scatter', mode:'markers', visible:true,  name:'boff'},

}
};


// const __toggleVis = (id, ser) => {
//     if(id === action.id) {
//         return {...ser, visible: false}; }
//     return ser;
// }

const __toggleVis = (id, ser) => {
    if(Number(id) === 0) {
        return {...ser, visible: false}; }
    return ser;
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === MUTATE_SERIES_META) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === TOGGLE_SERIES_VIS) {
        //debugger;
        var oldSeries = state.series;
        var newSeries = objMap(
            oldSeries,
            (id, ser) => Number(id) === action.id ? {...ser, visible: !ser.visible} : ser);
        /*jslint eqeq: true*/
        // var newSeries = objMap(
        //     oldSeries,
        //     (id, ser) => Number(id) === action.id ? {...ser, visible: false} : ser);
        const retVal = Object.assign({}, state, {'series': newSeries});
        console.log(action.id, action.id === 0, retVal.series[0]);
        return retVal;
    }
    return state;
}


function objMap(obj, func) {
    const keys = Object.keys(obj);
    var newObj = {};
    for (var k in keys) {
        newObj[k] = func(k, obj[k]);}
    return newObj;
}

///var a = {'a': 10, 'b':20};
//objMap(initialState.series, __toggleVis);
//debugger;


export default rootReducer;
