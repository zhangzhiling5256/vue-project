import Vue from "vue";
import Vuex from 'vuex';
import logger from "vuex/dist/logger";
import mutations from "./mutations";
import state from "./state";
import getters from "./getters";
import actions from "./actions";

Vue.use(Vuex);


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins: [logger()],
    strict: true
})
