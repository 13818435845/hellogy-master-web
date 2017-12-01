import React from 'react';
import styles from './MainLayout.less';
import { routerRedux } from 'dva/router'
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, Route, Redirect } from 'dva/router';
import SiderComponent from '../MyBlog/SiderComponent'
const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;
const MenuItemGroup = Menu.ItemGroup;
function MainLayout({ dispatch, children, location }) {


  const route = ['/home', '/users', '/Search', '/Demo', '/Add']

  function changeNav(e) {
    let path = route[e.key - 1]
    dispatch({
      type: "users/changeNav",
      payload: path
    })
  }

  return (
    <Layout style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <Header className="header" style={{ padding: 0 }}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
            <h1>Hello gy</h1>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={(e) => changeNav(e)}
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px', marginLeft: '200px' }}
        >
          <Menu.Item key="1" className={styles.nav}>首页</Menu.Item>
          <Menu.Item key="2" className={styles.nav}>我的博客</Menu.Item>
          <Menu.Item key="3" className={styles.nav}>搜索</Menu.Item>
          <Menu.Item key="4" className={styles.nav}>Demo</Menu.Item>
          <Menu.Item key="5"><span><Icon type="plus" style={{ size: 44 }} /></span></Menu.Item>
          <SubMenu style={{  float: 'right'}} title={<span className="avatar"><img  alt="个人中心" /><i className="on bottom b-white" /></span>}>
            
              
              <Menu.Item key="logout"><span >退出登录</span></Menu.Item>
           
       
          </SubMenu>
        </Menu>
      </Header>
      <Content className={styles.content}>
        {
          children
        }
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Hello-gy ©2017 Created by 1426555734@qq.com
      </Footer>
    </Layout>
  );
}

export default connect()(MainLayout);