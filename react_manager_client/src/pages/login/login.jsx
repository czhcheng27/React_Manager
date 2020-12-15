import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from '../../assets/imgs/nba-logo-transparent.png'
import nba from '../../assets/imgs/nba.png'
import { reqLogin } from '../../api';

// const Item = Form.Item




export default class Login extends Component {

    onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const result = await reqLogin(values)
        console.log('result', result);
    };

    render() {

        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 20,
            },
        };

        return (
            <div className='login'>
                <div className='login-content-left'>
                    <header className='login-header'>
                        <img src={logo} style={{ width: 50, height: 100 }}></img>
                        <h1>NBA Manager System</h1>
                    </header>
                    <span className='solgan'>WHERE AMAZING HAPPEN</span>
                </div>
                <section className='login-content'>
                    <img src={nba} style={{ width: 150, height: 70 }} alt='nba' />

                    <p>Sign in with your organizational account</p>

                    <Form
                        {...layout}
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: 'Please input your Username!' },
                                { min: 4, message: 'Username should at least 4 digits!' },
                                { max: 12, message: 'Username can\'t longer than 12 digits!' },
                                { pattern: /^[^\s]*$/, message: 'Username can\'t contain whitespace!' }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your Password!' },
                                { min: 4, message: 'Password should at least 4 digits!' },
                                { max: 12, message: 'Password can\'t longer than 15 digits!' },
                                { pattern: /^[^\s]*$/, message: 'Password can\'t contain whitespace!' }
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Sign in
                            </Button>
                        </Form.Item>

                    </Form>

                    <div className='login-content-bottom'>
                        <span>Sign in with userID</span><br />
                        <span>For help please email </span><a href='mailto:http://czhcheng27@gmail.com'>czhcheng27@gmail.com</a>
                    </div>

                    <h2>Develop by Zihang Cheng</h2>
                </section>
            </div>
        )
    }
}