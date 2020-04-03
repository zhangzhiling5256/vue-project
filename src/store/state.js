let state = {
    num: 0, count: 100, prod: [
        { name: "zs", age: 12 },
        { name: "ls", age: 13 },
        { name: "ww", age: 14 },
    ], user_name: "" || localStorage.getItem("user_name"), user_pwd: "" || localStorage.getItem("user_pwd")
};

export default state;