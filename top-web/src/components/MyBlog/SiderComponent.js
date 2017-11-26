import React, { Component } from 'react'
import { routerRedux} from 'dva/router';
import {connect} from 'dva'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const {Sider} = Layout;

class SiderComponent extends Component{

    changeItem(key){
        
     
    }

    findParentNode(classify){
        let arr = []
        classify.map((item)=>{
            if(item.parentId === "" || item.parentId === 0)
                arr.push(item)
        })
        return arr
    }

    findSonNode(nodesId,classify){
        let arr = []
        classify.map((item)=>{
            if(item.parentId === nodesId)
                arr.push(
                    <Menu.Item key={item.id} >{item.displayName}</Menu.Item>
                )
        })
        return arr
    }

    createNodes(classify){
        let arr = this.findParentNode(classify);
        let nodes =[]
        arr.map((node)=>{
            nodes.push(
                <SubMenu key={node.id} title={<span><Icon type="user" />{node.displayName}</span>}>
                {
                    this.findSonNode(node.id , classify)
                }
                </SubMenu>
            )
        })
        return nodes
    }
  
    handlerOnclick(e){
        let key = e.key
        let onMenuClick = this.props.onMenuClick
        if(onMenuClick)
            onMenuClick(key)
    }

    render(){
        let classify = this.props.classify
        console.log("-------",classify)

        return(
                <Sider width={200} style={{height:'100%'}}>
                    <Menu
                    theme="dark" 
                    mode="inline"
                    onClick={(e)=>this.handlerOnclick(e)}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    {
                        this.createNodes(classify)
                    }
                    </Menu>
                </Sider>
        )
    }
}

export default SiderComponent;