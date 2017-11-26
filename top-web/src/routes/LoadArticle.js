import React from 'react';
import { connect } from 'dva';
import styles from './LoadArticle.css';
import PageCard from '../components/MyBlog/pageCard'
import {  Pagination } from 'antd';

function LoadArticle({location,users }){  

  function loadArtcle(article){
    let arr = []
    article.map((item)=>{
        console.log('-------',item._id)
        arr.push(<PageCard key={item._id} articleId={item._id} post={item} route={{ route: location.pathname }} />)
    })
    return arr;
  }

  function changePage(page,pageSize){
    
  }
  let article = users.article
  return (
    
    <div className={styles.normal}>
        {
          loadArtcle(article)
        }
        <div style={{position:'absolute', bottom: "100px", textAlign: "center",left:'450' }} >
          <Pagination  pageSize={1} current={1} defaultCurrent={1} total={50} onChange={changePage}/>

        </div>
    </div>
  );
}

function mapStateToProps(state) {
  let users = state.users
  return {
    users
  };
}

export default connect(mapStateToProps)(LoadArticle);
