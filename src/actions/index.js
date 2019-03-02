// src/js/actions/index.js

import { ADD_ARTICLE } from "../actions/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};
