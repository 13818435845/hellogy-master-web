import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

const host = 'http://192.168.1.61:8080/'

export function addArticle(data){
    // return request(`/api/login`);
    return request({
      
      url: host+'addBlog',
      method: 'post',
      data
    })
  }

  
//获取分类
export function getClassify(){
  // return request(`/api/login`);
  let data = {userId : 1}
  return request({
    
    url: host+'getClassifyByUserId',
    method: 'post',
    data
  })
}