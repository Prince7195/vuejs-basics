import Vue from 'vue';
import Vuex from 'vuex';

import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";
import { loadData } from "./action";

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions: {
        loadData
    },
    modules: {
        stocks,
        portfolio
    }
});