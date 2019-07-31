import produce from 'immer';
import {login,getUserInfo,loginWIthId} from '@/api/authority';
import {setStore,getStore} from '@/utils';

export default {
  namespace: 'authority',
  state: {
    userInfo: {}
  },
  reducers: {
    saveUserInfo (state, {payload}) {
      return produce (state, nextData => {
        nextData.userInfo = payload;
      });
    },
    logout(state,{payload}) {
      setStore('token','');
      setStore('tokenTime','');
      return produce (state, nextData => {
        nextData.userInfo = {};
      });
    }
  },
  effects: {
    *login ({payload, callback}, {put}) {
      const {data} = yield login (payload.username,payload.password);

      if (data.state == 0) {
        alert (data.body);
        callback (false);
        return;
      }

      setStore('token',data.body)
      setStore('tokenTime',Date.now())
      yield put ({
        type: 'checkLogin'
      });

      callback && callback (true);
    },
    *loginWithId ({payload, callback}, {put}) {
      const {data} = yield loginWIthId (payload);

      if (data.state == 0) {
        alert (data.body);
        callback (false);
        return;
      }

      setStore('token',data.body)
      setStore('tokenTime',Date.now())
      yield put ({
        type: 'checkLogin'
      });

      callback && callback (true);
    },
    *checkLogin ({callback}, {put}) {
        const tokenTime = getStore('tokenTime');
        const token = getStore('token');
        const now = Date.now();
        if(token && token != 'null' && tokenTime && tokenTime != '' && now - tokenTime <= 1000 * 60 * 60 * 8){
            const {data} = yield getUserInfo ();
            if(data.state !== 1){
                setStore('token','');
                callback && callback(false);
            }else{
                yield put ({
                    type: 'saveUserInfo',
                    payload: data.body,
                });
                callback && callback(true)
            }
        }else{
          yield put ({
              type: 'logout'
          });
          callback && callback(false);
        }
      },
  },
};