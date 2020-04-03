let getters = {
    val: (state) => { return state.num % 2 ? "奇数" : "偶数" },
    userName: (state) => { return state.user_name },
    user_pwd: (state) => { return state.user_pwd },
    getValue(state) {
        var item = state.prod.map(ele => {
            return {
                name: ele.name + "__技术部",
                age: ele.age + 10
            }

        })
        return item;
    },
    getAgeByName: (state) => (name) => {
        var items = state.prod.find(ele => {
            if (ele.name === name) {
                return ele.age;
            }
        })
        return items.age;
    }
}

export default getters;