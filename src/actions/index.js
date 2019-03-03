// src/js/actions/index.js

import { ADD_ARTICLE, MUTATE_SERIES_META, TOGGLE_SERIES_VIS
       } from "../actions/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }};

export function mutateSeriesMeta(payload) {
    return { type: MUTATE_SERIES_META, payload }};

// export const toggleTodo = id => ({
//     type: 'TOGGLE_TODO',
//     id})};

export const toggleVisibility = id => ({
    type: TOGGLE_SERIES_VIS,
    id})
