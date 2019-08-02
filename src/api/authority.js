import axios from './index';

export const login = (data) => {
  return axios.post('api/authority/login',{
    username:data.username,
    password:data.password
  })
};

export const getUserInfo = () => {
  return axios.get('api/authority/userInfo/1')
};
