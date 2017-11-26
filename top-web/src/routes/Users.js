
import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';

import PageCard from '../components/MyBlog/pageCard'
import { Form, Card, Select, List, Tag, Icon, Pagination, Row, Col, Button, Input } from 'antd';
import SiderComponent from '../components/MyBlog/SiderComponent'

function Users({dispatch, children,location,users }) {



  let classify = users.classify



  function onMenuClick(key){
      dispatch({
          type: "users/changeClassify",
          payload : key
      })
  }
  


  return (
      <div id='container' style={{width:'100%'}}>
        <div style={{width:'200px',height:'100%',float:'left'}}>
          <SiderComponent 
            classify = {classify}
            onMenuClick={onMenuClick}/>
        </div>
        <div id='article' style={{position:'absolute',float:'right',marginTop:'10px',height:'100%',
                    width:' -webkit-fill-available',marginRight:'10px',marginLeft:'210px',overflowY:'auto'}}>
          {
            children
          }
        </div>
      </div>
  );
}

function mapStateToProps(state) {
  var  users = state.users
  return {
      users
  };
}

export default connect(mapStateToProps)(Users);