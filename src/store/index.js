import Vue from "vue";
import Vuex from 'vuex';
import logger from "vuex/dist/logger";
import mutations from "./mutations";

Vue.use(Vuex);

let state = { num: 0,user_name:""||localStorage.getItem("user_name"),user_pwd :""||localStorage.getItem("user_pwd")};

let getters={
    val:(state)=>{return state.num %2?"奇数":"偶数"},
    userName:(state)=>{return state.user_name},
    user_pwd:(state)=>{return state.user_pwd}
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    plugins:[logger()],
    strict:true
})
