import axios from 'axios';
import {api_base_url,AxiosWithCredentials} from "@/config";
import { message } from 'antd';

axios.defaults.baseURL = api_base_url;
axios.defaults.withCredentials = AxiosWithCredentials;

axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
    let token = localStorage.getItem('token');
    if (token) {
          config.headers.Authorization = 'Bearer '+ `${token}`;
    }
    return config;
}, function (err) {
    message.error('Error request,please try to resend the request');return;
})

//响应格式：{state:(0|1),body:{...}}
axios.interceptors.response.use(response => { // 这里的response包含每次响应的内容
    if(!response || !response.data){
        message.error('Error request,please refresh the page');return;
    }

    if(response.data.state == 0){
        message.warning(response.data.body);
        return false;
    }else{
        return response;
    }
  }, async error => {
    if(error.response){
        switch (error.response.status){
        case 401 :  message.error('Permission denied');break;
        default :  message.error('Error response,please refresh the page');break;
        }
    }else{
        message.error('Error response,please try to resend the request');
    }
    return false;
});

export default axios;