import * as TYPRES from "./mutations-types";
import compile from "../utils/secret";
let mutations = {
    [TYPRES.ADDNUM](state, val) {
        state.num += val;
    },
    [TYPRES.REMOVENUM](state) {
        state.num--;
    },
    [TYPRES.GET_LOGIN](state, obj) {
        let { name, pwd } = obj;
        state.user_name = compile.Encrypt(name);
        localStorage.setItem('user_name', compile.Encrypt(name));
        if (!pwd) {
            return;
        }
        state.user_pwd = compile.Encrypt(pwd);
        localStorage.setItem('user_pwd', compile.Encrypt(pwd));
    },
    getValue(state, num) {
        var items = state.prod.map(ele => {
            return {
                age: ele.age += num
            } 
        })
        return items;
    }
}
export default mutations;