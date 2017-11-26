import * as usersService from '../services/users';
import * as blog from '../services/blog';
import * as pageInfos from '../constant/pageInfo';
import * as classifys from '../constant/classify';
import { routerRedux} from 'dva/router';
import usersModel from './users'


export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    article: [],
    selectedNav:"",
    classify:[]
  },
  reducers: {
    save(state, { payload: { article , classify } }) {
      state.article = article
      state.classify = classify
      return { ...state,article,classify};
    },
    navchanged(state, { payload:  selectedNav }){
      state.selectedNav  = selectedNav
      return {...state ,selectedNav}
    }
  },
  effects: {
    *query({ payload: { page = 1 } }, { call, put }) {
      // const { data, headers } = yield call(usersService.fetch, { page });
      const classify = yield call(blog.getClassify)
      let data=pageInfos['pageInfos']
      // let classify = classifys['classify']
      usersModel.state.article = data;
      let article = usersModel.state.article
      yield put({
        type: 'save',
        payload: {
          article,
          classify
        },
      });
    },
    *changeNav({ payload:  path }, { call, put }){
      usersModel.state.selectedNav = path;
      let selectedNav = usersModel.state.selectedNav
      yield put(routerRedux.push(path))
      yield put({
         type : "navchanged",
         payload: {
            selectedNav
         }
      })
    },
    *changeClassify({ payload:  key }, { call, put }){
      yield put(routerRedux.push("/users/loadArticle"))
      console.log("key:",key);
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // if (pathname === '/') {
          dispatch({ type: 'query', payload: {} });
        }
      );
    },
  },
};