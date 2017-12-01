import React from 'react';
import styles from './register.less';
import { Input, Icon, Button, Row, Form } from 'antd';
const FormItem = Form.Item

class registerModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            passwordAgain: '',
            confirmDirty: false
        };
    }
    onChangePsswordAgain = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    submit(userName, password) {
        let data = { 'userName': userName, 'password': password, 'remember': 1 }
        let onClickHandler = this.props.onclickHandler
        if (onClickHandler)
            onClickHandler(data)
    }
    handleOk() {
        const { validateFieldsAndScroll } = this.props.form;
        validateFieldsAndScroll((errors, values) => {
            if (errors) {
                return
            }
            console.log(values)
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
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email', message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true, message: 'Please input your E-mail!',
                                }
                            ],
                        })(<Input size="large" placeholder="Email" />)}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('userName', {
                            rules: [
                                {
                                    required: true, message: 'Please input your userName!',
                                },
                            ],
                        })(<Input size="large" placeholder="Username" />)}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true, message: 'Please input your password!',
                                },
                                {
                                    validator: this.checkConfirm,
                                }
                            ],
                        })(<Input size="large" type="password" placeholder="Password" />)}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('passwordAgain', {
                            rules: [
                                {
                                    required: true, message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.checkPassword,
                                }
                            ],
                        })(<Input size="large" type="password" placeholder="passwordAgain" />)}
                    </FormItem>
                    <Row>
                        <Button type="primary" size="large" onClick={() => this.handleOk(userName, password)} >
                            Register
                        </Button>

                    </Row>

                </form>
            </div>
        );
    }
}

export default Form.create()(registerModal);
