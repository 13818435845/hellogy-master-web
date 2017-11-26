import React from 'react';
import { Card } from 'antd';
import $ from 'jquery'

const PageContent = React.createClass({
    
    componentDidMount() {
        let {pathname} = this.props.location;
        let ctx = this;
        $.ajax({
          url: "http://" + "127.0.0.1:8080" + "/Blog/blog/articles",
                dataType:"jsonp",
                method: "GET", success (data) {
            //AjaxChecker (data);
            ctx.setState({isReady: true, content: data.data});
          }
            });
            console.log('ctx')
            console.log(ctx)
          
    },
    render() {
        console.log("345346")
        console.log(this.props)
        const post =
        {
            _id: 1,
            author: { nick_name: "张三", full_name: "lisi", avatar: "3278437ry34ryhdh3" },
            title: "springAOP",
            tag: ["java", "spring", "AOP"],
            star: "10",
            like: "11",
            message: "12",
            excerpt: "面向切面编程（也叫面向方面），可以通过预编译方式和运行期动态代理实现在不修改源代码的情况下给程序动态统一添加功能的一种技术。AOP实际是GoF设计模式的延续，设计模式孜孜不倦追求的是调用者和被调用者之间的解耦，AOP可以说也是这种目标的一种实现。"

        }
        return (
            <div style={{height:"100%"}}>
                      <Card title={<p style={{fontSize:28}}>{post.title}</p>} bordered={true} extra={
                        <div style={{height:"100%"}}>
                            标签： {post.tag.map((item, key) => (
                                <a href="" size="large">{item}      </a>))}
                        </div>
                    }>
                        {post.excerpt}
                    </Card>
            </div>
        );
    }
});
export default PageContent;