import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8081';
axios.interceptors.response.use((res) => {
    return res.data;
})

export default axios;