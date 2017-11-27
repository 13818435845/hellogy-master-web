import React from 'react';
import styles from './LoginModal.less';
import { Input, Icon, Button, Row, Form } from 'antd';
const FormItem = Form.Item

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }
  submit(userName, password) {
    let data = { 'userName': userName, 'password': password, 'remember': 1 }
    let onClickHandler = this.props.onclickHandler
    if (onClickHandler)
      onClickHandler(data)
  }
 handleOk () {
   const {validateFieldsAndScroll}=this.props.form;
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      console.log(values)
      values.remember=1
      let onClickHandler = this.props.onclickHandler
      if (onClickHandler)
        onClickHandler(values)
    })
  }
  render() {
    const { userName, password } = this.state;
    let ret = this.props.ret
    const { getFieldDecorator } = this.props.form;
    //const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt={'logo'} src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" />
          <span>'Hello gy Web'</span>
        </div>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input size="large" placeholder="Username" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input size="large" type="password" placeholder="Password" />)}
          </FormItem>
          <Row>
            <Button type="primary" size="large" onClick={() => this.handleOk(userName, password)} >
              Sign in
            </Button>
            Or <a href="http://localhost:8000/#/register">register now!</a>
            <p>
              <span>Username：guest</span>
              <span>Password：guest</span>
            </p>
          </Row>

        </form>
      </div>
    );
  }
}

export default Form.create()(LoginModal);
