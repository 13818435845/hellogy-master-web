import * as usersService from '../services/blog';

export default {
  namespace: 'createArticle',
  state: {},
  reducers: {},
  effects: {
    *create({payload : data} ,{put ,call}){
        console.log("data",data)
        let result = yield call(usersService.addArticle , data)
    }
  },
  subscriptions: {},
};
