// src/js/reducers/index.js
import { ADD_ARTICLE, MUTATE_SERIES_META, TOGGLE_SERIES_VIS,
         CHANGE_SERIES_NAME
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



export default rootReducer;
