import axios from 'axios';
import {api_url,AxiosWithCredentials} from "@/config";

axios.defaults.baseURL = api_url;
axios.defaults.withCredentials = AxiosWithCredentials;

axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
    let token = localStorage.getItem('token');
    if (token) {
          config.headers.Authorization = 'Bearer '+ `${token}`;
    }
    return config;
}, function (err) {
    console.log('err',err)
})

export default axios;