import React from 'react';
import styles from './MainLayout.less';
import { routerRedux } from 'dva/router'
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, Route, Redirect } from 'dva/router';
import SiderComponent from '../MyBlog/SiderComponent'
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
const MenuItemGroup = Menu.ItemGroup;
function MainLayout({ dispatch, children, location }) {


  const route = ['/home', '/users', '/Search','Demo','Add']

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
          <SubMenu  className={styles.nav1} title={<span><Icon type="plus" style={{size:44}} /></span>}>
            
              <Menu.Item key="5">Option 1</Menu.Item>
              <Menu.Item key="6">Option 2</Menu.Item>
            
          </SubMenu>
        </Menu>
      </Header>
      <Content className={styles.content}>
        {
          children
        }
      </Content>
    </Layout>
  );
}

export default connect()(MainLayout);