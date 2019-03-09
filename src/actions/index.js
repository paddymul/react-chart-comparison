// src/js/actions/index.js

import {  TOGGLE_SERIES_VIS, CHANGE_SERIES_NAME,
          ADD_DATA, CHART_LIB_CHANGE
       } from "../actions/action-types";

export const toggleVisibility = id => ({type: TOGGLE_SERIES_VIS, id})

export const changeSeriesName = obj => {
    return {type: CHANGE_SERIES_NAME, id: obj.id, name: obj.ev.target.value };};

export const addDataAction = newLen => {
    return {type: ADD_DATA, 'newLen':newLen};};

export const chartLibChange = obj => {
    return {type: CHART_LIB_CHANGE,  new_lib: obj.target.value };
};
