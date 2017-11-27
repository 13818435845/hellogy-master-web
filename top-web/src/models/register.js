import * as usersService from '../services/users';
import RegisterModal from './register'
import { routerRedux } from 'dva/router'

export default {
  namespace: 'register',
  state: {
    isLogin: false
  },
  reducers: {
    logins(state,{payload:isLogin}){
        console.log(isLogin)
        state.isLogin=isLogin
        return {...state}
    }
  },
  effects: {
    //用户登录
    *register({payload:data}, { put, call }){
        console.log('1145')
     // const datas = yield call(usersService.login, data)
     const datas=[]
      for(let key in datas){
         if(key === 'code')
         RegisterModal.state.isLogin = datas[key] === 0 ? true : false
      } 
console.log('11')
     // let isLogin = loginModal.state.isLogin
     let isLogin =true;
      //登录成功，跳转
      if(isLogin)
        yield put(routerRedux.push('/login'))
      
    //   yield put({
    //     type: 'logins',
    //     payload:  isLogin 
    // }); 
    },
  },
  subscriptions: {},
};
