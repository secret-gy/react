import React from "react";
import './index.css'

import logo from './images/timgg.png'

import { Form, Input, Button,Checkbox } from 'antd';

import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    PlusCircleOutlined,
    UserOutlined,
    LockOutlined
} from '@ant-design/icons';


export default class Login extends React.Component {

    onFinish = values => {
        console.log('Received values of form: ', values);
        console.log(values);
    };

    render() {
        return (
            <div className='login'>
                <header className='login_header'>
                    <img src={ logo } alt="log"/>
                    <h1>React项目:后台管理系统</h1>
                </header>
                <section className='login_content' >
                    <h2>用户登录</h2>
                    <div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' },
                                    // {min:4,message: '必须大于四位!'},
                                    // {max:12,message: '必须小于四位!'},
                                    // {pattern:/^[\d_]+$/,message: '用户名必须是英文、数字、或者下划线!'},

                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value) {
                                                // return Promise.resolve();
                                                return Promise.reject('用户名不能为空');
                                            }else if (value.length>10){
                                                return Promise.reject('用户名长度最多为10');
                                            }
                                            return Promise.resolve();
                                        },
                                    }),

                                    ]
                                }
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" type='username'/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </section>
            </div>
        );
    }

}

/*

1.


* */