import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import { Card, Row, Col, Icon, Button } from "antd"

const PageCard = React.createClass({
    PropTypes: {
		post: React.PropTypes.object
	},
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
    style: {
        button: {
            float: "right",
            marginRight: 200,
            marginTop: "2%"
        },
        title: { width: "450px" },
        text: { fontSize: "16px", padding: "24px" },
        link: { zIndex: 100 },
        header: { width: "50%" }
    },
    render() {
        const { post,route,articleId } = this.props;
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} size="large" />
              {text}
            </span>
          );
        return (
            <div>

                <Card title={post.title} bordered={true} extra={
                    <div >
                        标签： {post.tag.map((item, key) => (
                            <a key={key} href="" size="large">{item}</a>))}
                    </div>
                }>
                    <div>{post.excerpt}<br/><br/><br/>
                    <Button style={{ float: "right" }} type="primary" onClick={() => {
                        console.log(this.context)
							this.context.router.push("users/pageContent/"+articleId)
						}}>READ</Button>
                    <div style={{ float: "left" }}> 
                    <IconText type="star-o"  text={post.star} />,
                    <IconText type="like-o"  text={post.like} />,
                    <IconText type="message"  text={post.message} />
                    </div>
                    </div>
                </Card>
            </div>);
    }
});
export default PageCard;
