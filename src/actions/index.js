// src/js/actions/index.js

import { ADD_ARTICLE, MUTATE_SERIES_META, TOGGLE_SERIES_VIS,
         CHANGE_SERIES_NAME
       } from "../actions/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }};

export function mutateSeriesMeta(payload) {
    return { type: MUTATE_SERIES_META, payload }};


export const toggleVisibility = id => ({type: TOGGLE_SERIES_VIS, id})

export const changeSeriesName = obj => {
  
    return {type: CHANGE_SERIES_NAME, id: obj.id, name: obj.ev.target.value };
};

