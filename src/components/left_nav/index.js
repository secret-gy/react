import React from "react";
import { Link } from 'react-router-dom'
import './index.css'
import logo from '../../assets/images/timgg.png'
import {withRouter} from 'react-router'

import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;


export default class LeftNav extends React.Component{

    render() {
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt=""/>
                    <h1>硅谷后台</h1>
                </Link>

                <Menu
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to='/'>首页</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="2" icon={<MailOutlined />}>
                            <Link to='/category'>
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MailOutlined />}>商品管理</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>

        );
    }
}