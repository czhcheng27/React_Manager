import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from '../../assets/imgs/nba-logo-transparent.png'
import nba from '../../assets/imgs/nba.png'

// const Item = Form.Item


const onFinish = (values) => {
    console.log('Received values of form: ', values);
};

export default class Login extends Component {
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
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
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
                        <span>Sign in with userID</span><br/>
                        <span>For help please email </span><a href='mailto:http://czhcheng27@gmail.com'>czhcheng27@gmail.com</a>
                    </div>

                    <h2>Develop by Zihang Cheng</h2>
                </section>
            </div>
        )
    }
}