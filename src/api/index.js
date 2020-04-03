import axios from "./axios";

//获取轮播图数据
export let getBannerData = () => {
    return axios.get("/banner")
}
//获取图书列表
export let getBookData = () => {
    return axios.get("/getbook")
}
//获取所有图书
export let getBookAll = (obj) => {
    return axios.get("/bookmodify")
}
//获取指定图书
export let getBookInfo = (obj) => {
    return axios.get("/getbookinfo", { params: obj })
}
//删除指定图书
export let deleteInfoBook = (obj) => {
    return axios.get("/deleteBook", { params: obj })
}
//获取home图片
export let getAll = () => {
    return axios.all([getBannerData(), getBookData()]);
}
//登陆请求
export let userLogin = (obj) => {
    return axios.get("/userLogin", { params: obj })
}
// table表格获取
export let getTable=(obj)=>{
    return axios.get("/getTable",{params:obj})
 }