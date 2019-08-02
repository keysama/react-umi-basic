import axios from './index';
import {setTimeout_promise} from '@/utils/promise';

export const login = (data) => {
  return axios.post('api/authority/login',{
    username:data.username,
    password:data.password
  })
};

export const getUserInfo = () => {
  return axios.get('api/authority/userInfo/1')
};
