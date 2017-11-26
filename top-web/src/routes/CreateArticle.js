import React from 'react';
import { connect } from 'dva';
import styles from './CreateArticle.css';
import MainLayout from '../components/MainLayout/MainLayout';
import AddArticle from '../components/MyBlog/AddArticles'


function CreateArticle({dispatch,users}) {

  function addArticle(data){
      console.log("--------",data)
      dispatch({
          type : 'createArticle/create',
          payload :data
      })
  }

  let classify = users.classify
  return (
    <AddArticle 
      onSubmit = {addArticle}
      classify = {classify}
    ></AddArticle>
  );
}

function mapStateToProps(states) {
    let users = states.users
  return {
    users
  };
}

export default connect(mapStateToProps)(CreateArticle);
